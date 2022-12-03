import style from '../styles/404.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import Countdown from 'react-countdown';

function custom404() {
  const Router = useRouter();
  
  waktu();
  return (
    <div className={style.main}>
        <div className={style.kode}>404</div>
        🙄
        <br />
        kamu sepertinya nyasar?
        <br />
        aku balikin ke home yak 
        <br />
        tunggu yak,
        <Countdown date={Date.now() + 4000} />
    </div>
  )

  function waktu() {
    useEffect(() => {
      setTimeout(() => {
        Router.push('/');
      }, 5000);
    }, []);
  }
}

export default custom404