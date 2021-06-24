import styles from './styles.module.scss'
import Profile from "./Profile";
import Life from "./Life";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Background from "./Background"
import Section from "../../components/Section"

const About = () => {
  return (
    <Section className={styles.about}>
      <Background className={styles.background}/>

      <div className={styles.content}>
        <Title tag="h2">关于</Title>
        <Title tag="h3">哈喽，我是海怪<br/>聊聊我自己</Title>

        <Profile/>

        <Life/>

        <Paragraph className={styles.goal}>
          Being a proactive software engineer allows me to make a difference,
          <br/>
          as the onus is upon us as engineers to help shape our cosmos for the better.
        </Paragraph>

        <Paragraph className={styles.check}>Check me out!</Paragraph>

        <Button>Github</Button>
      </div>
    </Section>
  )
}

export default About
