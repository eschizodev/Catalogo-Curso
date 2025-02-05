"use client"; // Adicione essa linha no topo do arquivo

import { useEffect, useState } from "react";

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}

interface Professor {
  id: number;
  nome: string;
  biografia: string;
}

interface Livro {
  id: number;
  nome: string;
  isbn: string;
  tipo: number;
}

interface Curso {
  id: number;
  nome: string;
  descricao: string;
  carga_horaria: number;
  categoria: Categoria;
  professor: Professor;
  livros: Livro[];
}

export function useCursos() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://10.7.0.124:3000/cursos") // Use o IP correto da API Rails
      .then((res) => res.json())
      .then((data) => {
        setCursos(data);
        setLoading(false);
      })
      .catch((err) => console.error("Erro ao buscar cursos:", err));
  }, []);

  return { cursos, loading };
}
