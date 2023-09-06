import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <NavLink to='/'>
          <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-2-1.png" alt="" />
          <p>React Dex</p>
        </NavLink>
      </div>
    </div>
  )
}