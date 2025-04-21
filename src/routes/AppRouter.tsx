import { Route, Routes } from "react-router"
import { CursosScreen } from "../components/screens/cursos/cursosScreen"
import { EstudiantesScreen } from "../components/screens/estudiantes/estudiantesScreen"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<CursosScreen />} />
        <Route path="/estudiantes/:id" element={<EstudiantesScreen />} />
    </Routes>
  )
}