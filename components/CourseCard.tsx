
import { Button } from "@/components/ui/button"
import { Clock, User } from "lucide-react"

interface CourseCardProps {
  curso: {
    id: number
    nome: string
    descricao: string
    carga_horaria: number
    professor: { nome: string }
  }
}

// Função para obter uma imagem baseada no nome do curso
function getCourseImage(courseName: string, index: number): string {
  if (index === 0) {
    return "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  } else if (index === 1) {
    return "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
  return "/placeholder.svg?height=200&width=400"
}

export default function CourseCard({ curso, index = 0 }: CourseCardProps & { index?: number }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={getCourseImage(curso.nome, index) || "/placeholder.svg"}
          alt={curso.nome}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{curso.nome}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{curso.descricao}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{curso.carga_horaria}h</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>Prof. {curso.professor.nome}</span>
          </div>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" variant="default">
          Inscrever-se
        </Button>
      </div>
    </div>
  )
}

