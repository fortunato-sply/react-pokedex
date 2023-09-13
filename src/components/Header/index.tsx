import { NavLink, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  }

  const renderLogoutButton = () => {
    if(sessionStorage.getItem('token'))
      return <button onClick={logout}>Logout</button>
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.space}></div>
        <NavLink to='/main'>
          <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-2-1.png" alt="" />
          <p>React Dex</p>
        </NavLink>
        <div className={styles.space}>
          {renderLogoutButton()}
        </div>
      </div>
    </div>
  )
}