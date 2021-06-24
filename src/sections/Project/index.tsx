import * as React from "react"
import styles from './styles.module.scss'
import Title from "../../components/Title"
import Section from "../../components/Section"
import Item from "./Item"

const Project = () => {
  return (
    <Section id="project" className={styles.project}>
      <Title tag="h2">个人项目</Title>
      <Title tag="h3">超多好玩、沙雕的项目</Title>

      <ul>
        <Item
          title="This Website!"
          content="Hello"
          links={[
            {image: '', content: 'https://www.baidu.com'}
          ]}
          techUsed={[
            {image: '', content: 'JavaScript'}
          ]}
        />
      </ul>

      <Title className={styles.more} tag="h3">More projects (and a blog) Coming Soon™ 🕑</Title>
    </Section>
  )
}

export default Project
