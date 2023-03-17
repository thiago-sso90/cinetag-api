import Cabecalho from "componentes/cabecalho";
import Container from "componentes/container";
import Rodape from "componentes/rodape";
import FavoritosProvider from "contexto/favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;