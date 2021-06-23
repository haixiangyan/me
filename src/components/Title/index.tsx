import {createElement, FC} from "react";
import styles from './styles.module.scss'

interface Props {
  tag: 'h1' | 'h2' | 'h3'
}

const Title: FC<Props> = (props) => {
  const {tag, children} = props;

  return (
    <div className={styles.title}>
      {createElement(`${tag}`, {children})}
    </div>
  )
}

export default Title
