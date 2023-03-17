import Inicio from "./pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "pages/favoritos";
import Player from "pages/player";
import Erro from "pages/naoencontrado";
import PaginaBase from "pages/paginabase";

function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<Erro />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;