import {FC} from "react";
import styles from './styles.module.scss'
import HandDown from "./HandDown";
import useTyped from "../../hooks/useTyped";

const strings = [
  '哈喽，我是帅哥',
  '等一下，让我想想',
  `我是海怪，<br>一个热爱生活的奋斗人。<br/>拒绝996和内卷，<br/>偶尔聊聊技术和分享生活。`
]

const Home: FC = () => {
  const el = useTyped(strings)

  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <span ref={el}/>
        </div>

        <figure className={styles.ballWrapper}>
          <div className={styles.ball}>
            M
          </div>
        </figure>
      </div>

      <HandDown/>
    </section>
  )
}

export default Home
