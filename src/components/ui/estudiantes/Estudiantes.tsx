import { FC } from "react";
import { ICurso } from "../../../types/ICurso";
import styles from "./estudiantes.module.css";

interface IEstudiantes {
  curso: ICurso;
}

export const Estudiantes: FC<IEstudiantes> = ({ curso }) => {
  return (
    <div>
      {curso!.estudiantes.length > 0 ? (
        curso!.estudiantes.map((el) => (
          <div className={styles.containerCardEstudiantes}>
            <h4>Id del estudiante: {el.id}</h4>
            <h4>Nombre del estudiante: {el.nombre}</h4>
            <h4>Edad del estudiante: {el.edad}</h4>
          </div>
        ))
      ) : (
        <h3>No hay estudiantes</h3>
      )}
    </div>
  );
};
