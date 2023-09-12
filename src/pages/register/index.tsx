import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { SECRET } from '../../SECRET';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const onHandleClickRegister = async () => {
    var data = {
      username,
      password
    };

    var dataEncrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();
    try {
      //await axios.post('http://localhost:8080/register', {dataEncrypted: dataEncrypted});
      console.log(dataEncrypted);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.imagepc}>

        </div>
        <div className={styles.content}>
          <h2>register</h2>
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
            <button onClick={onHandleClickRegister}>continue</button>
            <div className={styles.register}>
              <span>already have an account?</span>
              <NavLink to='/'>Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}