import styles from './styles.module.scss'
import {FC} from "react";

const Timeline: FC = (props) => {
  const {children} = props;

  return (
    <div className={styles.timeline}>
      {children}
    </div>
  )
}

export default Timeline
