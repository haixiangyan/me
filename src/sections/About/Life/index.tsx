import React from "react";
import Timeline from "../../../components/Timeline";
import TimelineHeader from "../../../components/Timeline/Header";
import TimelineItem from "../../../components/Timeline/Item";
import HighLight from "../../../components/HighLight";
import useTyped from "../../../hooks/useTyped";

// Icons
import uci from "../../../assets/icons/uci.jpg";
import neu from "../../../assets/icons/neu.png";
import dji from "../../../assets/icons/dji.png";
import tencent from "../../../assets/icons/tencent.png";

import styles from "./styles.module.scss";

const strings = ["码农", "社畜", "打工人", "程序员", "工程师", "前端开发"];

const Life = () => {
  const el = useTyped(strings, { loop: true });

  return (
    <Timeline>
      <TimelineHeader>1996</TimelineHeader>
      <TimelineItem direction="right" time="7月" header="👶🏻" />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header="🙇‍♂️ 好好学习..." />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={["🎓 本科毕业 🎉"]}
        node={
          <span className={styles.customNode}>
            <img width={46} src={neu} alt="uci" />
          </span>
        }
        content={[
          "沈阳，辽宁",
          <span>
            <HighLight>东北大学</HighLight> @ 软件工程（英语国际）
          </span>,
          "最初写 C 和 Java，慢慢转写 JavaScript，前端真好玩！",
        ]}
      />
      <TimelineItem
        time="9月"
        node={
          <span className={styles.customNode}>
            <img width={34} src={uci} alt="neu" />
          </span>
        }
        header={[
          "✈️ 美国",
          <span>
            研究生入学 <HighLight>UCI</HighLight>
          </span>,
        ]}
        content={["刷题，刷题，刷题... 面经，面经，面经..."]}
      />
      <TimelineHeader>2019</TimelineHeader>
      <TimelineItem
        node={
          <span className={styles.customNode}>
            <img width={30} src={dji} alt="dji" />
          </span>
        }
        direction="right"
        time="6月"
        header={[
          "🚗 一路向北去 Palo Alto",
          <span>
            <HighLight>DJI</HighLight> 实习 @ Frontend Engineer
          </span>,
        ]}
      />
      <TimelineHeader>2020</TimelineHeader>
      <TimelineItem
        time="3月"
        header={["🎓 研究生毕业 🎉"]}
        content={[
          "美国，加州，尔湾",
          <span>
            <HighLight>University of California, Irvine</HighLight> @ Computer
            Science
          </span>,
        ]}
      />
      <TimelineItem
        direction="right"
        node={<span className={styles.customNode}>🇨🇳</span>}
        time="5月"
        header={["回国 🛬，隔离 😷，见家人 👨‍👩‍👦"]}
      />
      <TimelineItem
        time="7月"
        node={
          <span className={styles.customNode}>
            <img width={30} src={tencent} alt="tencent" />
          </span>
        }
        header={[
          "深圳，广东",
          <span className={styles.position}>
            入职 <HighLight>腾讯</HighLight> 🐧 @{" "}
            <span className={styles.typed} ref={el} />
          </span>,
        ]}
      />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem direction="right" header={["？？？"]} />
      <TimelineHeader>💀 ⚰️</TimelineHeader>
    </Timeline>
  );
};

export default Life;
