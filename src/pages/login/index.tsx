import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onHandleClickLogin = () => {
    
  }

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.imagepc}>

        </div>
        <div className={styles.content}>
          <h2>login</h2>
          <div className={styles.inputs}>
            <input 
              type="text" 
              placeholder='username' 
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="password" 
              placeholder='password' 
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>continue</button>
            <div className={styles.register}>
              <span>doesn't have an account?</span>
              <NavLink to='/register'>Register</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}