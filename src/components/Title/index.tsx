import React, { AllHTMLAttributes, createElement, FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props extends AllHTMLAttributes<HTMLDivElement>{
  tag: 'h1' | 'h2' | 'h3'
}

const Title: FC<Props> = (props) => {
  const {
    tag, children, className, ...restProps
  } = props;

  return (
    <div {...restProps} className={classNames(className, styles.title)}>
      {createElement(`${tag}`, { children })}
    </div>
  );
};

export default Title;
