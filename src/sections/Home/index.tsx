import React, { FC } from 'react';
import { Col, Row } from 'antd';
import Fade from 'react-reveal/Fade';
import styles from './styles.module.scss';
import useTyped from '../../hooks/useTyped';
import useLottie from '../../hooks/useLottie';
import { arrowDownLottie, sheepLottie } from './constants';

const strings = [
  '哈喽，我是帅哥',
  '不对不对，让我想想',
  '我是海怪，<br>一个热爱生活的前端开发。<br/>拒绝996和内卷，<br/>偶尔聊聊技术或分享生活。',
];

const Home: FC = () => {
  const el = useTyped(strings);
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const sheepLottieRef = useLottie(sheepLottie);

  const next = () => {
    const $about = document.querySelector('#about');
    if ($about) {
      $about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <span ref={el} />
        </Col>

        <Col span={24} md={9} className={styles.ballWrapper}>
          <Fade bottom>
            <div className={styles.ball}>
              <div ref={sheepLottieRef} />
            </div>
          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
