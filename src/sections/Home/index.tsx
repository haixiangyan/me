import {FC} from "react";
import styles from './styles.module.scss'
import handDownSvg from '../../assets/svgs/hand-down.svg'

const Home: FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p>
            我是海怪，
          </p>
          <p>
            偶尔聊聊技术和分享生活。
          </p>
          <p>
            拒绝996和内卷，
          </p>
          <p>
            一个热爱生活的奋斗人。
            <span className={styles.cursor}/>
          </p>
        </div>

        <figure className={styles.ballWrapper}>
          <div className={styles.ball}>
            怪
          </div>
        </figure>
      </div>

      <img className={styles.handDown} src={handDownSvg} alt="向下"/>
    </section>
  )
}

export default Home
