import styles from './cabecalholink.module.css'
import { Link } from 'react-router-dom'

 function Cabecalholink({url,Children}) {
  return (
        <Link to={url} className={styles.link}>
            {Children}
        
        </Link>
  )
}
export default Cabecalholink;