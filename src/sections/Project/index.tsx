import * as React from "react"
import styles from './styles.module.scss'
import Title from "../../components/Title"
import Section from "../../components/Section"

const Project = () => {
  return (
    <Section className={styles.project}>
      <Title tag="h2">个人项目</Title>
      <Title tag="h3">超多好玩、沙雕的项目</Title>
    </Section>
  )
}

export default Project
