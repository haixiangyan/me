import React, { FC } from "react";
import styles from "./styles.module.scss";

const Timeline: FC = (props) => {
  const { children } = props;

  return <div className={styles.timeline}>{children}</div>;
};

export default Timeline;
