import * as React from 'react';
import Masonry from 'react-masonry-css';
import { Modal, Tabs } from 'antd';
import {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Item from './Item';
import Button from '../../components/Button';
import {
  projects, moreProjects, mdPx, lgPx,
} from './constants';

const { TabPane } = Tabs;

const getColumnNum = () => {
  const { innerWidth } = window;
  if (innerWidth < mdPx) {
    return 1;
  }
  if (innerWidth < lgPx) {
    return 2;
  }
  return 3;
}

const Project = () => {
  const [moreVisible, setMoreVisible] = useState<boolean>(false);
  const [columnNum, setColumnNum] = useState<number>(getColumnNum);

  useEffect(() => {
    const onSizeChanged = () => setColumnNum(getColumnNum())
    window.addEventListener('resize', onSizeChanged);
    return () => window.removeEventListener('resize', onSizeChanged)
  }, [])

  return (
    <Section id="project" className={styles.project}>
      <Title tag="h2">个人项目</Title>
      <Title tag="h3">超多好玩、沙雕的项目</Title>

      <Masonry
        breakpointCols={columnNum}
        className={styles.projectList}
        columnClassName={styles.projectListColumn}
      >
        {projects.map((project) => (<Item key={project.logo} {...project} />))}
        <div className={styles.more}>
          <Button className={styles.moreBtn} onClick={() => setMoreVisible(true)}>更多</Button>
        </div>
      </Masonry>

      <Title className={styles.footerTitle} tag="h3">
        😋 更多好玩、沙周的项目（和
        {' '}
        <i>文章</i>
        {' '}
        ）正在路上 🕑
      </Title>

      <Modal width="100%" title="更多项目" visible={moreVisible} footer={null} onCancel={() => setMoreVisible(false)}>
        <Tabs>
          {moreProjects.map((project) => (
            <TabPane key={project.title} tab={project.title}>
              <iframe title={project.title} style={{ width: '100%', height: '50vh' }} src={project.url} frameBorder="0" />
            </TabPane>
          ))}
        </Tabs>
      </Modal>
    </Section>
  );
};

export default Project;
