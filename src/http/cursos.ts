import axios from "axios";
import { ICurso } from "../types/ICurso";

export const getCursos = async () => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const cursos = await axios.get<ICurso[]>(url);
    return cursos.data;
  } catch (err) {
    console.log(err);
  }
};