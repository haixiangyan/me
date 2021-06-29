import React from 'react';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Title from '../../components/Title';
import styles from './styles.module.scss';
import { contacts } from './constants';

const emailStr = 'mailto:haixiang6123@gmail.com?subject=想说啥就说啥吧&body=大胆说出你的想法~';

const Contact = () => (
  <Section id="contact" className={styles.contact}>
    <Title tag="h2">找到我 🙋‍♂️</Title>

    <div className={styles.container}>
      <ul className={styles.contactList}>
        <Flip cascade left>
          {contacts.map((contact) => (
            <li key={contact.image}>
              <a href={contact.url} target="_blank" rel="noreferrer">
                <img src={contact.image} alt="contactImage" />
              </a>
            </li>
          ))}
        </Flip>
      </ul>

      <RubberBand top>
        <p className={styles.subTitle}>👍 求点赞，求关注，求转发，一键三连！</p>
      </RubberBand>

      <Button
        onClick={() => window.location.href = emailStr}
        className={styles.emailBtn}
        bg="#7d0000"
      >
        haixiang6123@gmail.com
      </Button>
    </div>
  </Section>
);

export default Contact;
