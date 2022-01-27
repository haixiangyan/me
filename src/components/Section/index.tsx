import React, { AllHTMLAttributes, FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Section: FC<AllHTMLAttributes<HTMLElement>> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <section {...restProps} className={classNames(className, styles.section)}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Section;
