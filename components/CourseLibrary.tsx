"use client"

import { useState, useMemo } from "react"
import { CourseCard } from "./CourseCard"
import { CategoryFilter } from "./CategoryFilter"
import { Pagination } from "./Pagination"
import { SearchBar } from "./SearchBar"

interface Course {
  id: number
  title: string
  description: string
  category: string
  duration: string
  level: string
  instructor: string
  rating: number
  enrolledStudents: number
  image: string
  createdAt: Date
}

const courses: Course[] = [
  {
    id: 1,
    title: "Introdução ao React",
    description: "Aprenda os fundamentos do React e crie aplicações web modernas",
    category: "Desenvolvimento Web",
    duration: "4 semanas",
    level: "Iniciante",
    instructor: "Ana Silva",
    rating: 4.7,
    enrolledStudents: 1500,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    createdAt: new Date("2023-01-15"),
  },
  {
    id: 2,
    title: "Python para Data Science",
    description: "Explore Python para análise de dados e visualização",
    category: "Ciência de Dados",
    duration: "6 semanas",
    level: "Intermediário",
    instructor: "Carlos Mendes",
    rating: 4.8,
    enrolledStudents: 2200,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    createdAt: new Date("2023-02-20"),
  },
  {
    id: 3,
    title: "Design UX/UI Avançado",
    description: "Domine técnicas avançadas de design de interface e experiência do usuário",
    category: "Design",
    duration: "8 semanas",
    level: "Avançado",
    instructor: "Mariana Costa",
    rating: 4.9,
    enrolledStudents: 1800,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
    createdAt: new Date("2023-03-10"),
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    description: "Introdução aos conceitos e algoritmos de Machine Learning",
    category: "Inteligência Artificial",
    duration: "10 semanas",
    level: "Intermediário",
    instructor: "Rafael Souza",
    rating: 4.6,
    enrolledStudents: 2500,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    createdAt: new Date("2023-04-05"),
  },
  {
    id: 5,
    title: "JavaScript Avançado",
    description: "Aprofunde seus conhecimentos em JavaScript e padrões de projeto",
    category: "Desenvolvimento Web",
    duration: "6 semanas",
    level: "Avançado",
    instructor: "Fernanda Lima",
    rating: 4.7,
    enrolledStudents: 1900,
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    createdAt: new Date("2023-05-12"),
  },
  {
    id: 6,
    title: "Blockchain e Criptomoedas",
    description: "Entenda os fundamentos da tecnologia blockchain e criptomoedas",
    category: "Tecnologia",
    duration: "5 semanas",
    level: "Intermediário",
    instructor: "Lucas Oliveira",
    rating: 4.5,
    enrolledStudents: 1200,
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    createdAt: new Date("2023-06-18"),
  },
  {
    id: 7,
    title: "Marketing Digital",
    description: "Aprenda estratégias eficazes de marketing digital para impulsionar seus negócios",
    category: "Marketing",
    duration: "6 semanas",
    level: "Iniciante",
    instructor: "Juliana Alves",
    rating: 4.6,
    enrolledStudents: 2100,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    createdAt: new Date("2023-07-01"),
  },
  {
    id: 8,
    title: "Desenvolvimento de Jogos com Unity",
    description: "Crie jogos incríveis usando a engine Unity e C#",
    category: "Desenvolvimento de Jogos",
    duration: "12 semanas",
    level: "Intermediário",
    instructor: "Ricardo Gomes",
    rating: 4.8,
    enrolledStudents: 1600,
    image:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    createdAt: new Date("2023-07-15"),
  },
  {
    id: 9,
    title: "Fotografia Digital para Iniciantes",
    description: "Aprenda os fundamentos da fotografia digital e comece a capturar imagens incríveis",
    category: "Fotografia",
    duration: "4 semanas",
    level: "Iniciante",
    instructor: "Camila Santos",
    rating: 4.7,
    enrolledStudents: 1300,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
    createdAt: new Date("2023-08-01"),
  },
  {
    id: 10,
    title: "Gestão de Projetos Ágeis",
    description: "Domine as metodologias ágeis para gerenciar projetos de forma eficiente",
    category: "Gestão",
    duration: "8 semanas",
    level: "Intermediário",
    instructor: "André Martins",
    rating: 4.9,
    enrolledStudents: 2300,
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    createdAt: new Date("2023-08-15"),
  },
]

const ITEMS_PER_PAGE = 6

export function CourseLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("rating")

  const categories = Array.from(new Set(courses.map((course) => course.category)))

  const filteredAndSortedCourses = useMemo(() => {
    let result = courses

    if (selectedCategory !== "all") {
      result = result.filter((course) => course.category === selectedCategory)
    }

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase()
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(lowercasedTerm) ||
          course.description.toLowerCase().includes(lowercasedTerm),
      )
    }

    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "students":
        result.sort((a, b) => b.enrolledStudents - a.enrolledStudents)
        break
      case "newest":
        result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        break
    }

    return result
  }, [selectedCategory, searchTerm, sortBy])

  const totalPages = Math.ceil(filteredAndSortedCourses.length / ITEMS_PER_PAGE)
  const paginatedCourses = filteredAndSortedCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Catálogo de Cursos</h1>
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  )
}

