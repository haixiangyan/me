import {FC, useEffect, useRef} from "react";
import Typed from 'typed.js'
import styles from './styles.module.scss'
import handDownSvg from '../../assets/svgs/hand-down.svg'

const strings = [
  '哈喽，我是帅哥',
  '等一下，让我想想',
  `我是海怪，<br>一个热爱生活的奋斗人。<br/>拒绝996和内卷，<br/>偶尔聊聊技术和分享生活。`
]

const Home: FC = () => {
  const el = useRef<HTMLParagraphElement | null>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 100,
      backSpeed: 60,
    }

    typed.current = new Typed(el.current || '', options);

    return () => typed.current?.destroy()
  }, [])

  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <span ref={el}/>
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
