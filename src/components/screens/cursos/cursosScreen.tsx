import { useEffect, useState } from "react";

import { ICurso } from "../../../types/ICurso";
import { getCursos } from "../../../http/cursos";
import styles from "./cursosScreen.module.css";
import { CursoCard } from "../../ui/cursoCard/CursoCard";


export const CursosScreen = () => {
  const [cursos, setCursos] = useState<ICurso[]>([]);


  const getCursosScreen = async () => {
    try {
      const cursosAwait = await getCursos();
      console.log("Cursos obtenidos:", cursosAwait);
      if (cursosAwait) {
        setCursos(cursosAwait);
      }
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  };

  useEffect(() => {
    getCursosScreen();
  }, []);

  return (
    <div className={styles.containerPrincipal}>
      <h1>Cursos</h1>
      <p>lista de cursos</p>

      <div className={styles.containerCursos}>
            {
                cursos!.length > 0 ?
                cursos.map((el) => (<CursoCard key={el.id?.toString() || 'default'} curso = {el} />)):
                <h3>No hay cursos</h3>
            }
        </div>
    </div>
  );
};
