import styles from './styles.module.scss'
import avatar from './avatar.jpg'
import symbol from './symbol.png'
import Timeline from "./Timeline";
import TimelineHeader from "./Timeline/Header";
import TimelineItem from "./Timeline/Item";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2>关于</h2>
        <h3>哈喽，我是海怪<br/>聊聊我自己</h3>

        <div className={styles.content}>
          <div className={styles.details}>
            <p>
              前端海驴一只，别人都叫我海怪，游戏里一般叫 Monster 👻。
            </p>
            <p>
              广东佛山人，在东北上了4年学，又去了加州读了2年硕，
              平常喜欢写代码，偶尔会弹一下吉他，或者打打守望先锋的鱼塘。
            </p>
            <p>
              最近发现身边的人总觉得我天天就只会写代码😨，所以今后会多发掘一些冷门的兴趣爱好，最近喜欢上了拼图和花切。
            </p>
            <img src={symbol} alt="symbol"/>
            <p>
              喜欢折腾，折腾过 Vim、五笔、终端、爬高峰、魔方、蝴蝶刀......
              喜欢好看，酷炫的东西，可能这就是喜欢前端的原因吧 @_@。
              完全没有画画和做饭的天赋，小的时候学过一下素描，GG😣了，留学的时候尝试过很多次的掌勺，也GG😣了。努力是有的，但是都黑人抬棺了。
            </p>
            <p>
              梦想：写一些可以改变世界的代码 & 教人写代码😯。
            </p>
          </div>

          <div className={styles.avatar}>
            <img src={avatar} alt="头像"/>
          </div>
          <div className={styles.name}>
            <p>海</p>
            <p>怪</p>
          </div>
        </div>

        <Timeline>
          <TimelineHeader>1993</TimelineHeader>
          <TimelineItem time="7月" header="👶🏻" />
          <TimelineHeader>...</TimelineHeader>
          <TimelineItem direction="left" header="Livin' life..." />
          <TimelineHeader>2015</TimelineHeader>
          <TimelineItem
            time="3月"
            header="🎓 Colgate University 🎉"
            content={[
              'Hamilton, NY',
              'Double Major: Computer Science, Japanese',
              'Summa Cum Laude, Phi Beta Kappa (ΦΒΚ) Honor Society',
            ]}
          />
          <TimelineItem
            direction="left"
            time="7月"
            header={["✈️ Move to Japan.", 'English Teacher @ Komatsu Meihou High School (JET Program). 👨‍🏫']}
            content={['Komatsu, Ishikawa Prefecture']}
          />
          <TimelineHeader>2016</TimelineHeader>
          <TimelineItem
            time="8月"
            header={["⛩️ Move to Kyoto.", 'Software & Web Engineer @ Weblio. 💻']}
            content={['Kyoto, Kyoto Prefecture']}
          />
          <TimelineHeader>...</TimelineHeader>
          <TimelineItem
            direction="left"
            time="8月"
            header={['???']}
          />
          <TimelineHeader>💀 ⚰️</TimelineHeader>
        </Timeline>

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
