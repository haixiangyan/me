import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import Profile from "./Profile";
import Life from "./Life";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Section from "../../components/Section";
import HighLight from "../../components/HighLight";
import { resumeUrl } from "../../utils";

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
        喜欢 <HighLight>写代码</HighLight>， 并不是为了做一个 🐂 🍺 的项目
        <br />
        而是可以把那些好玩的想法实现出来 👉{" "}
        <span className={styles.justForFun}>Just for fun ~</span>
      </Paragraph>
    </Fade>

    <Fade bottom>
      <div>
        <Button
          onClick={() => window.open(resumeUrl, "_blank")}
          className={styles.pulse}
        >
          我的简历
        </Button>
      </div>
    </Fade>
  </Section>
);

export default About;
