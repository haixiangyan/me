import React, { FC, ReactChild } from "react";
import Fade from "react-reveal/Fade";
import { Tooltip } from "antd";
import styles from "./styles.module.scss";

interface Image {
  image: string;
  content: string;
}

export type ProjectItem = {
  logo?: string;
  title?: string | ReactChild;
  badges?: string[];
  content?: string | ReactChild;
  description?: string | ReactChild;
  links?: Image[];
  techUsed?: Image[];
};

const Item: FC<ProjectItem> = (props) => {
  const { logo, title, badges, content, description, links, techUsed } = props;

  return (
    <div className={styles.item}>
      <Fade>
        <div className={styles.container}>
          {logo && <img className={styles.logo} src={logo} alt="logo" />}

          {title && <h4 className={styles.title}>{title}</h4>}

          {badges && (
            <div className={styles.badges}>
              {badges.map((badge) => (
                <img key={badge} src={badge} alt="badge" />
              ))}
            </div>
          )}

          {content && <div className={styles.content}>{content}</div>}

          {description && (
            <div className={styles.description}>{description}</div>
          )}

          {links && (
            <div className={styles.links}>
              {links.map((link) => (
                <a
                  key={link.content}
                  href={link.content}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link.image} alt="linkImage" />
                </a>
              ))}
            </div>
          )}

          {techUsed && (
            <div className={styles.techUsed}>
              <h4>技术栈</h4>
              <ul>
                {techUsed.map((tech, index) => (
                  <li
                    key={tech.content}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <Tooltip placement="top" title={tech.content} color="black">
                      <img src={tech.image} alt="techUsed" />
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Item;
