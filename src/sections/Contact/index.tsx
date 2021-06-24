import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import styles from './styles.module.scss'

import bilibili from '../../assets/svgs/bilibili.svg'
import github from '../../assets/svgs/github.svg'
import jianshu from '../../assets/svgs/jianshu.svg'
import juejin from '../../assets/svgs/juejin.svg'
import weixin from '../../assets/svgs/weixin.svg'
import zhihu from '../../assets/svgs/zhihu.svg'

const contacts = [
  {image: juejin, url: ''},
  {image: github, url: ''},
  {image: bilibili, url: ''},
  {image: weixin, url: ''},
  {image: zhihu, url: ''},
  {image: jianshu, url: ''},
]

const Contact = () => {
  return (
    <Section id="contact" className={styles.contact}>
      <ul className={styles.contactList}>
        {contacts.map(c => (
          <li key={c.image}>
            <a href={c.url} target="_blank">
              <img src={c.image} alt="image"/>
            </a>
          </li>
        ))}
      </ul>

      <Paragraph>💬 Feel free to reach out and slide a message my way. 🙂</Paragraph>
      <Button>haixiang6123@gmail.com</Button>
    </Section>
  )
}

export default Contact
