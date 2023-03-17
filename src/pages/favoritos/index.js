import Banner from 'componentes/banner'
import Card from 'componentes/card'
import Titulo from 'componentes/titulo'
import { useFavoritoContext } from 'contexto/favoritos'
import styles from './favoritos.module.css'

 function Favoritos() {
  const {favorito} = useFavoritoContext();
  return (
    <>
        <Banner imagem="favoritos"/>
        <Titulo>
            <h1>Meus favoritos</h1>
        </Titulo>
        <section className={styles.container}>
          {favorito.map((fav)=>{
            return <Card {...fav} key={fav.id} />
          })}
        </section>
    </>
  )
}
export default Favoritos