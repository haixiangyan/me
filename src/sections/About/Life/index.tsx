import Timeline from "../../../components/Timeline";
import TimelineHeader from "../../../components/Timeline/Header";
import TimelineItem from "../../../components/Timeline/Item";
import styles from './styles.module.scss'

const Life = () => {
  return (
    <Timeline>
      <TimelineHeader>1996</TimelineHeader>
      <TimelineItem direction="right" time="7月" header="👶🏻"/>
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header="好好学习..."/>
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={['🎓 本科毕业 🎉']}
        content={[
          '沈阳，辽宁',
          '东北大学 @ 软件工程（英语国际）',
          '写 C 和 Java，慢慢转写 JavaScript，前端真好玩！'
        ]}
      />
      <TimelineItem
        time="9月"
        node={<span className={styles.customNode}>🇺🇸</span>}
        header={["✈️ 美国", '研究生入学 UCI']}
        content={['刷题，刷题，刷题... 面经，面经，面经...']}
      />
      <TimelineHeader>2019</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={['🚗 去湾区 @ Palo Alto', 'DJI 实习 @ Frontend Engineer']}
      />
      <TimelineHeader>2020</TimelineHeader>
      <TimelineItem
        time="3月"
        header={['🎓 研究生毕业 🎉']}
        content={[
          '美国，加利福尼亚，尔湾',
          'University of California, Irvine @ Computer Science',
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
        header={['入职腾讯 @ 前端工程师', '深圳，广东']}
      />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem
        direction="right"
        header={['？？？']}
      />
      <TimelineHeader>💀 ⚰️</TimelineHeader>
    </Timeline>
  )
}

export default Life
