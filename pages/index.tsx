import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emmanuel D.</title>
        <meta name="description" content="built with nextjs + typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <img className={styles.logo} src="https://i.ibb.co/WBXVr45/Untitled-2-Recovered.png" />
        </div>
        <div>
        </div>
      </div>

      <main className={styles.main}>

        <div className={styles.intro}>
          <div>
            <img src="https://cdn.discordapp.com/attachments/509806914050457610/1011407158241406996/IMG_0631.png" style={{ height: '9em', width: '9em', borderRadius: 100, }} />
          </div>
          <h2>Hi, I’m Emmanuel,</h2>
          <p>I’m a self taught fullstack web developer from Chicago who builds modern web/mobile applications with React.js and websites with WordPress.</p>
        </div>

        <button className={styles.button} style={{ background: 'rgba(0, 114, 177, 0.85' }}><img src="" /><a href="https://www.linkedin.com/in/emmanuel-donelson/">LinkedIn Resume </a></button>

        <button className={styles.button} style={{ background: 'rgba(234, 76, 137, 0.85)' }}><img src="" /><a href="https://dribbble.com/groovyemman">Dribbble Portfolio</a></button>
        <button className={styles.button} style={{ background: 'rgba(43, 49, 55, 0.85)' }}><img src="" /><a href="https://github.com/emmanpsd">Github</a></button>
        <button className={styles.button} style={{ background: 'rgba(169, 116, 86, 1)' }}><img src="" /><a href="https://wh.npme2.repl.co/" target="_blank">Waffle House Project</a></button>

        <button className={styles.button} style={{ background: 'rgba(164,164,243, 0.85)' }}><img src="" /><a href="mailto:emmanueldonelson@gmail.com">Book Me</a></button>


      </main>


    </div>
  )
}

export default Home
