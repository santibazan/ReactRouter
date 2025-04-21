import { IEstudiante } from "./IEstudiantes";

export interface ICurso {
  id: number;
  nombre: string;
  estudiantes: IEstudiante[];
}