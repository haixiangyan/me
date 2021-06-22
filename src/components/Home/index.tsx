import {FC} from "react";
import styles from './styles.module.scss'

const Home: FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p>一只会写代码的海怪</p>
          <p>偶尔聊聊技术‍</p>
          <p>也会分享生活</p>
          <p>拒绝996和内卷，认真地活着</p>
        </div>

        <figure className={styles.ballWrapper}>
          <div className={styles.ball}>
            怪
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Home
