import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './styles.module.scss';
import Profile from './Profile';
import Life from './Life';
import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Section from '../../components/Section';
import HighLight from '../../components/HighLight';

const About = () => (
  <Section id="about" className={styles.about}>
    <Title tag="h2">关于</Title>

    <Title tag="h3">
      哈喽，我是海怪 👻
      <br />
      聊聊我自己
    </Title>

    <Profile />

    <Life />

    <Fade bottom>
      <Paragraph className={styles.goal}>
        对于我来说，
        <HighLight>前端工程师</HighLight>
        {' '}
        更多像是画家，HTML、CSS、JavaScript 就像画笔。
        <br />
        有时候写代码并不是为了做一个
        {' '}
        <HighLight>🐂 🍺</HighLight>
        {' '}
        的项目，而是把心中的想法实现出来。
      </Paragraph>
    </Fade>

    <Fade bottom>
      <div>
        <Button
          onClick={() => window.open('https://yanhaixiang.com/resume-generator/', '_blank')}
          className={styles.pulse}
          bg="#15a000"
        >
          Résumé
        </Button>
      </div>
    </Fade>
  </Section>
);

export default About;
