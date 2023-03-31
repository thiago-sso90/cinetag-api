import { useFavoritoContext } from 'contexto/favoritos'
import styles from './card.module.css'
import iconefavoritar from './favorite_outline.png'
import desfavoritar from './favorite.png'
import { Link } from 'react-router-dom';

function Card({ id,titulo , capa }) {
    const { favorito, adicionafavorito } = useFavoritoContext();
     const ehfavorito = favorito.some((fav) => fav.id === id);
     const icone = !ehfavorito ? iconefavoritar : desfavoritar;
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>

            </Link>

            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionafavorito({ id, titulo, capa })
                }} />

        </div>
    )
}

export default Card;