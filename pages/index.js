import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [xMain,setXMain] = useState(0);
  const [yMain,setYMain] = useState(0);
  const [xTrailing,setXtrailing] = useState(0);
  const [yTrailing,setYtrailing] = useState(0);
  const xOffset = 50;
  const yOffset = 50;

  function handleMouseMove (e) {
    const { clientX, clientY } = e;
    setXMain(clientX);
    setYMain(clientY);
    setTimeout(() => {
      setXtrailing(clientX);
      setYtrailing(clientY);
      console.log("Trailing",xTrailing,yTrailing);
    }, 300);xTrailing
    console.log("Main",xMain, yMain);
  }
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.bg} onMouseMove={e => handleMouseMove(e)}></div>
      <div className={styles.firefly} style={{left: xTrailing-xOffset, top: yTrailing-yOffset} }>
        <div className={styles.glow}></div>
        <div className={styles.wing_left}></div>
        <div className={styles.wing_right}></div>
        <div className={styles.body}></div>
      </div>
    </>
  )
}
