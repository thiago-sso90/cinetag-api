import Card from "componentes/card";
import Titulo from "componentes/titulo";
import Banner from "../../componentes/banner";
import videos from 'json/db.json'
import styles from './Inicio.module.css'

function Inicio() {
  return (
    <>

      <Banner imagem="home" />
      <Titulo>
        <h1> Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
         return <Card {...video} key={video.id} />
        })}
      </section>
 
    </>

  )

}
export default Inicio;

