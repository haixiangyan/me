import React from 'react';
import Timeline from '../../../components/Timeline';
import TimelineHeader from '../../../components/Timeline/Header';
import TimelineItem from '../../../components/Timeline/Item';
import styles from './styles.module.scss';
import HighLight from '../../../components/HighLight';
import useTyped from '../../../hooks/useTyped';

const strings = [
  '码农',
  '社畜',
  '打工人',
  '前端工程师',
];

const Life = () => {
  const el = useTyped(strings, { loop: true });

  return (
    <Timeline>
      <TimelineHeader>1996</TimelineHeader>
      <TimelineItem direction="right" time="7月" header="👶🏻" />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header="👍 好好学习..." />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={['🎓 本科毕业 🎉']}
        content={[
          '沈阳，辽宁',
          <span>
            <HighLight>东北大学</HighLight>
            {' '}
            @ 软件工程（英语国际）
          </span>,
          '写 C 和 Java，慢慢转写 JavaScript，前端真好玩！',
        ]}
      />
      <TimelineItem
        time="9月"
        node={<span className={styles.customNode}>🇺🇸</span>}
        header={[
          <span>
            ✈️
            <HighLight>美国</HighLight>
          </span>,
          '研究生入学 UCI',
        ]}
        content={['刷题，刷题，刷题... 面经，面经，面经...']}
      />
      <TimelineHeader>2019</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={['🚗 一路向北去 Palo Alto', 'DJI 实习 @ Frontend Engineer']}
      />
      <TimelineHeader>2020</TimelineHeader>
      <TimelineItem
        time="3月"
        header={['🎓 研究生毕业 🎉']}
        content={[
          '美国，加州，尔湾',
          <span>
            <HighLight>University of California, Irvine</HighLight>
            {' '}
            @ Computer Science
          </span>,
        ]}
      />
      <TimelineItem
        direction="right"
        node={<span className={styles.customNode}>🇨🇳</span>}
        time="5月"
        header={['🛬 回国喽，见见家人，看看朋友']}
      />
      <TimelineItem
        time="7月"
        header={[
          '深圳，广东',
          <span>
            入职
            <HighLight>腾讯</HighLight>
            {' '}
            @
            <span className={styles.position} ref={el} />
            {' '}
            🐧
          </span>,
        ]}
      />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem
        direction="right"
        header={['？？？']}
      />
      <TimelineHeader>💀 ⚰️</TimelineHeader>
    </Timeline>
  );
};

export default Life;
