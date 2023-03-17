import { createContext, useContext, useState } from "react";

export const Favoritocontext = createContext();

Favoritocontext.displayName = "Favoritos"

export default function FavoritosProvider({ children }){
    const [favorito, setFavorito] = useState([]);

    return(
        <Favoritocontext.Provider
        value={{favorito,setFavorito}}>
            {children}
        </Favoritocontext.Provider>
    )
}
export function useFavoritoContext(){
    const {favorito,setFavorito} = useContext(Favoritocontext);

    function adicionafavorito(novofavorito){
        const favoritorepetido = favorito.some(item => item.id === novofavorito.id)
            
        let novalista = [...favorito];

        if(!favoritorepetido){
            novalista.push(novofavorito);
            return setFavorito(novalista);
        }
       novalista = favorito.filter((fav) => fav.id !== novofavorito.id);
        //novalista.splice(novalista.indexOf(novofavorito),1)
       return setFavorito(novalista)
    }
    return(
        favorito,
        adicionafavorito
    )
    

}