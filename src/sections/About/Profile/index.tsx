import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'antd';
import Fade from 'react-reveal/Fade';
import lottie from 'lottie-web';
import styles from './styles.module.scss';
import avatar from '../../../assets/images/avatar.jpg';
import Paragraph from '../../../components/Paragraph';
import HighLight from '../../../components/HighLight';

const Profile = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationRef.current) {
      lottie.loadAnimation({
        container: animationRef.current, // Required
        path: 'https://assets9.lottiefiles.com/private_files/lf30_ijlzmjq6.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: 'Hello World', // Name for future reference. Optional.
      });
    }
  }, []);

  return (
    <Row gutter={36} className={styles.profile}>
      <Col lg={{ span: 11, order: 1 }} span={24} order={3} className={styles.details}>
        <Fade bottom>
          <Paragraph>
            一名
            <HighLight>前端开发</HighLight>
            ，广东佛山人，现在在
            <HighLight>腾讯@深圳</HighLight>
            搬砖。
            别人都叫我
            <HighLight>海怪</HighLight>
            ，游戏里一般叫 Monster 👻。
          </Paragraph>
          <Paragraph>
            本科在
            <HighLight>东北大学</HighLight>
            上了4年学，又去了
            <HighLight>加州大学（尔湾分校）</HighLight>
            读了2年硕。
            看了不少书、刷了不少题、去了不少地方，感叹过世界之大。
          </Paragraph>
        </Fade>

        <div className={styles.lottie} ref={animationRef} />

        <Fade bottom>
          <Paragraph>
            平常喜欢写代码 👨‍💻，偶尔会弹一下吉他 🎸，或者打打
            <HighLight>守望先锋</HighLight>
            的鱼塘 🎮。
            个人喜欢好看，酷炫的东西，可能这就是喜欢前端的原因吧 @_@。
            以前爱折腾，折腾过 Vim、五笔、魔方、...... 现在累了，还是躺着舒服。
          </Paragraph>
          <Paragraph>
            工作之后常常会想
            <HighLight>写代码的意义是什么</HighLight>
            ：搞钱 💰？还是做一个优秀的项目？好像是又好像都不是，或许写代码可以做更多有意义的事情。🤩
          </Paragraph>
        </Fade>
      </Col>

      <Col lg={{ span: 7, order: 2 }} span={14} order={1} className={styles.avatar}>
        <Fade top>
          <img src={avatar} alt="头像" />
        </Fade>
      </Col>

      <Col lg={{ span: 5, order: 3 }} span={24} order={2} className={styles.name}>
        <p>海</p>
        <p>怪</p>
      </Col>
    </Row>
  );
};

export default Profile;
