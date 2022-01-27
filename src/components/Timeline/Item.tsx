import React, { FC, ReactChild, useMemo } from "react";
import Fade from "react-reveal/Fade";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Paragraph from "../Paragraph";
import { detectMobile } from "../../utils";

interface Props {
  direction?: "left" | "right";
  time?: string | string[];
  header?: string | (string | ReactChild)[];
  content?: string | (string | ReactChild)[];
  node?: ReactChild;
}

const isMobile = detectMobile();

const TimelineItem: FC<Props> = (props) => {
  const { direction = "left", time, header, content, node } = props;

  const times = useMemo(() => (Array.isArray(time) ? time : [time]), [time]);
  const headers = useMemo(
    () => (Array.isArray(header) ? header : [header]),
    [header]
  );
  const contents = useMemo(
    () => (Array.isArray(content) ? content : [content]),
    [content]
  );

  return (
    <div
      className={classNames(
        styles.timelineItem,
        direction === "left" ? styles.left : styles.right
      )}
    >
      <div className={styles.node}>
        {node || <div className={styles.defaultNode} />}
      </div>

      <Fade
        bottom={isMobile}
        left={!isMobile && direction === "left"}
        right={!isMobile && direction === "right"}
      >
        <div
          className={classNames(
            styles.content,
            direction === "left" ? styles.left : styles.right
          )}
        >
          {times &&
            times.map((timeItem) => (
              <Paragraph
                key={timeItem ? timeItem.toString() : 0}
                className={styles.time}
              >
                {timeItem}
              </Paragraph>
            ))}
          {headers &&
            headers.map((headerItem) => (
              <Paragraph
                key={headerItem ? headerItem.toString() : 0}
                className={styles.header}
              >
                {headerItem}
              </Paragraph>
            ))}
          {contents &&
            contents.map((contentItem) => (
              <Paragraph
                key={contentItem ? contentItem.toString() : 0}
                className={styles.subtext}
              >
                {contentItem}
              </Paragraph>
            ))}
        </div>
      </Fade>
    </div>
  );
};

export default TimelineItem;
