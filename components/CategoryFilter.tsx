import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: CategoryFilterProps) {
  return (
    <div className="flex space-x-4">
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecione uma categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas as categorias</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="rating">Melhor avaliados</SelectItem>
          <SelectItem value="students">Mais populares</SelectItem>
          <SelectItem value="newest">Mais recentes</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

