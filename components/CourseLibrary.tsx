"use client"

import { useCursos } from "@/hooks/useCursos"
import CourseCard from "./CourseCard"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CourseLibrary() {
  const { cursos, loading } = useCursos()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Cursos</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex gap-4 w-full md:w-auto">
          <Select defaultValue="todos">
            <SelectTrigger className="w-[180px] bg-black text-white">
              <SelectValue placeholder="Todos os cursos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os cursos</SelectItem>
              <SelectItem value="recentes">Mais recentes</SelectItem>
              <SelectItem value="populares">Mais populares</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-[300px]">
          <Input placeholder="Pesquisar cursos..." className="border-gray-300" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cursos.map((curso, index) => (
          <CourseCard key={curso.id} curso={curso} index={index} />
        ))}
      </div>
    </div>
  )
}

