import React, { FC } from "react";
import styles from "./styles.module.scss";

const TimelineHeader: FC = (props) => {
  const { children } = props;

  return (
    <header className={styles.timelineHeader}>
      <span>{children}</span>
    </header>
  );
};

export default TimelineHeader;
