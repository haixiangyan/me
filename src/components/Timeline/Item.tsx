import {FC, ReactChild, useMemo} from "react";
import styles from './styles.module.scss';
import classNames from "classnames";
import Paragraph from "../Paragraph";

interface Props {
  direction?: 'left' | 'right';
  time?: string | string[];
  header?: string | (string | ReactChild)[];
  content?: string | (string | ReactChild)[];
  node?: ReactChild;
}

const TimelineItem: FC<Props> = (props) => {
  const {direction = 'left', time, header, content, node} = props;

  const times = useMemo(() => Array.isArray(time) ? time : [time], [time]);
  const headers = useMemo(() => Array.isArray(header) ? header : [header], [header])
  const contents = useMemo(() => Array.isArray(content) ? content : [content], [content]);

  return (
    <div className={classNames(styles.timelineItem, direction === 'left' ? styles.left : styles.right)}>
      <div className={styles.node}>
        {node || <div className={styles.defaultNode}/>}
      </div>

      <div className={classNames(styles.content, direction === 'left' ? styles.left : styles.right)}>
        {times && times.map((t, i) => <Paragraph key={i} className={styles.time}>{t}</Paragraph>)}
        {headers && headers.map((h, i) => <Paragraph key={i} className={styles.header}>{h}</Paragraph>)}
        {contents && contents.map((c, i) => <Paragraph key={i} className={styles.subtext}>{c}</Paragraph>)}
      </div>
    </div>
  )
}

export default TimelineItem
