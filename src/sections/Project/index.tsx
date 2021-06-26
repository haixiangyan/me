import * as React from "react"
import Masonry from 'react-masonry-css'
import styles from './styles.module.scss'
import Title from "../../components/Title"
import Section from "../../components/Section"
import Item from "./Item"
import projects from "./constants";

const Project = () => {
  return (
    <Section id="project" className={styles.project}>
      <Title tag="h2">个人项目</Title>
      <Title tag="h3">超多好玩、沙雕的项目</Title>

      <Masonry
        breakpointCols={3}
        className={styles.projectList}
        columnClassName={styles.projectListColumn}
      >
        {projects.map(project => (<Item {...project}/>))}
      </Masonry>

      <Title className={styles.more} tag="h3">More projects (and a blog) Coming Soon™ 🕑</Title>
    </Section>
  )
}

export default Project
