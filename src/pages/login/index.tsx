import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { SECRET } from '../../SECRET';
import CryptoJS from 'crypto-js';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const onHandleClickLogin = async () => {
    var data = {
      username,
      password
    };

    var dataEncrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();

    try {
      await axios.post('http://localhost:8080/login', { dataEncrypted })
        .then(res => {
          switch(res.status) {
            case(200):
              console.log("logado");
              sessionStorage.setItem("token", res.data.token);
              navigate('/main');
              window.location.reload();
              break;
            default:
              console.log("error");
              break;
          }
        })
    } catch (err) {
      console.log(`Error: ${err}`);
    }
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
            <button onClick={onHandleClickLogin}>continue</button>
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