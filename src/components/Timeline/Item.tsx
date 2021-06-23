import {FC, useMemo} from "react";
import styles from './styles.module.scss';
import classNames from "classnames";
import Paragraph from "../Paragraph";

interface Props {
  direction?: 'left' | 'right';
  time?: string | string[];
  header?: string | string[];
  content?: string | string[];
}

const TimelineItem: FC<Props> = (props) => {
  const {direction = 'right', time, header, content} = props;

  const times = useMemo(() => Array.isArray(time) ? time : [time], [time]);
  const headers = useMemo(() => Array.isArray(header) ? header : [header], [header])
  const contents = useMemo(() => Array.isArray(content) ? content : [content], [content]);

  return (
    <div className={classNames(styles.timelineItem, direction === 'left' ? styles.left : styles.right)}>
      <div className={styles.node}/>

      <div className={classNames(styles.content, direction === 'left' ? styles.left : styles.right)}>
        {times && times.map(t => <Paragraph className={styles.time}>{t}</Paragraph>)}
        {headers && headers.map(h => <Paragraph className={styles.header}>{h}</Paragraph>)}
        {contents && contents.map(c => <Paragraph key={c} className={styles.subtext}>{c}</Paragraph>)}
      </div>
    </div>
  )
}

export default TimelineItem
