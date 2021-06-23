import styles from "./styles.module.scss";
import symbol from "../../../assets/images/symbol.png";
import avatar from "../../../assets/images/avatar.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
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
  )
}

export default Profile
