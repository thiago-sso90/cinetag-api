import { Link } from 'react-router-dom'
import logo from './logo.png'
import styles from './cabecalho.module.css'
import Cabecalholink from 'componentes/cabecalholink'


 function Cabecalho() {
    return (
      
        <heder className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo do cine" />
            </Link>
            <nav>
                <Cabecalholink url="./">
                    Home
                </Cabecalholink>
                <Cabecalholink url="./favorito">
                    Favoritos
                </Cabecalholink>
            </nav>
        </heder>
       
    )
}
export default Cabecalho;
