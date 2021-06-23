import styles from './styles.module.scss'
import Profile from "./Profile";
import Life from "./Life/Life";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2>关于</h2>
        <h3>哈喽，我是海怪<br/>聊聊我自己</h3>

        <Profile/>

        <Life/>

        <p className={styles.goal}>
          Being a proactive software engineer allows me to make a difference,
          <br/>
          as the onus is upon us as engineers to help shape our cosmos for the better.
        </p>

        <p className={styles.check}>Check me out!</p>
      </div>
    </section>
  )
}

export default About
