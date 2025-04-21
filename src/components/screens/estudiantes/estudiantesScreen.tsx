import { useEffect, useState } from "react";

import { ICurso } from "../../../types/ICurso";
import { getCursos } from "../../../http/cursos";

import { Estudiantes } from "../../ui/estudiantes/Estudiantes";
import { useParams } from "react-router";

export const EstudiantesScreen = () => {
  const { id } = useParams<{ id: string }>();

  const [curso, setCurso] = useState<ICurso>();

  const obtenerCursos = async () => {
    const cursosObtenidos = await getCursos();
    if (cursosObtenidos) {
      const cursoEncontrado = cursosObtenidos.find(
        (curso) => curso.id!.toString() === id
      );
      if (cursoEncontrado) {
        console.log(cursoEncontrado);
        setCurso(cursoEncontrado);
        return;
      }
    }
  };

  useEffect(() => {
    obtenerCursos();
  }, [id]);

  return (
    <div>
      {curso ? (
        <Estudiantes curso={curso} />
      ) : (
        <h1>Este id no se encuentra en la lista de cursos, error</h1>
      )}
    </div>
  );
};
