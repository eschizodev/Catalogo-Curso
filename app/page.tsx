import CourseLibrary from "@/components/CourseLibrary";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Cursos</h1>
      <CourseLibrary />
    </main>
  );
}
