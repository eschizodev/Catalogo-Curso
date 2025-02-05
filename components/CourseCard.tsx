import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star } from "lucide-react"
import Image from "next/image"

interface CourseCardProps {
  title: string
  description: string
  category: string
  duration: string
  level: string
  instructor: string
  rating: number
  enrolledStudents: number
  image: string
}

export function CourseCard({
  title,
  description,
  category,
  duration,
  level,
  instructor,
  rating,
  enrolledStudents,
  image,
}: CourseCardProps) {
  return (
    <Card className="w-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl bg-white">
      <div className="relative w-full h-48">
        <Image src={image || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 text-xl font-semibold text-black">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary" className="font-medium text-black">
            {category}
          </Badge>
          <span className="text-sm text-gray-600 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-black">{level}</span>
          <span className="text-sm text-gray-600">{instructor}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm font-medium text-black">{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1 text-gray-600" />
          <span className="text-sm text-gray-600">{enrolledStudents} alunos</span>
        </div>
        <Button className="font-semibold bg-black text-white hover:bg-gray-800">Inscrever-se</Button>
      </CardFooter>
    </Card>
  )
}

