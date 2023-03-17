import Banner from 'componentes/banner'
import Titulo from 'componentes/titulo'
import { useParams } from 'react-router-dom'
import videos from 'json/db.json'
import styles from './player.module.css'
import Erro from 'pages/naoencontrado'



function Player() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id)
  })
  if (!videos) {
    return <Erro />
  }
  //console.log(videos);
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>

        </iframe>
      </section>
    </>
  )
}
export default Player