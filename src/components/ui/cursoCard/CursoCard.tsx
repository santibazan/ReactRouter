import { FC } from "react";

import styles from "./cursoCard.module.css";
import { useNavigate } from "react-router-dom";
import { ICurso } from "../../../types/ICurso";


interface ICursoCardProps {
  key: string
  curso: ICurso
}
export const CursoCard: FC<ICursoCardProps> = ({ curso }) => {
  const navigate = useNavigate();

  const handleVerEstudiantes = () => {
    navigate(`/estudiantes/${curso.id}`);
  }
  
  return (
    <div className={styles.containerCardProps}>
      <h1>Curso</h1>
      <p>
        <b>Nombre del curso: </b>
        {curso.nombre}
      </p>
      <p>
        <b>ID:</b>
        {curso.id}
      </p>

      <button onClick={handleVerEstudiantes}className={styles.boton}>Ver Estudiantes</button>
    </div>
  );
};