import styles from "./styles.module.scss";
import symbol from "../../../assets/images/symbol.png";
import avatar from "../../../assets/images/avatar.jpg";
import Paragraph from "../../../components/Paragraph";
import HighLight from "../../../components/HighLight";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.details}>
        <Paragraph>
          一名 <HighLight>前端开发</HighLight>，别人都叫我 <HighLight>海怪</HighLight>，游戏里一般叫 Monster 👻。
        </Paragraph>
        <Paragraph>
          广东佛山人，本科在 <HighLight>东北大学</HighLight> 上了4年学，又去了 <HighLight>加州大学（尔湾分校）</HighLight> 读了2年硕。
          看了不少书、刷了不少题、去了不少地方，感叹过世界之大。
        </Paragraph>
        <img src={symbol} alt="symbol"/>
        <Paragraph>
          平常喜欢写代码 👨‍💻，偶尔会弹一下吉他 🎸，或者打打 <HighLight>守望先锋</HighLight> 的鱼塘 🎮。
          个人喜欢好看，酷炫的东西，可能这就是喜欢前端的原因吧 @_@。
        </Paragraph>
        <Paragraph>
          以前爱折腾，折腾过 Vim、五笔、终端、爬高峰、魔方、...... 现在累了，还是躺着舒服。
        </Paragraph>
        <Paragraph>
          工作之后常常想写代码的意义是什么：混口饭吃？还是做一个优秀的项目？好像都不是，或许写代码可以做更多有意义的事。🤩
        </Paragraph>
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