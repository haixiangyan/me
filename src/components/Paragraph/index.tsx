import {AllHTMLAttributes, FC} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

const Paragraph: FC<AllHTMLAttributes<HTMLParagraphElement>> = (props) => {
  const {children, className, ...restProps} = props

  return (
    <p className={classNames(className, styles.paragraph)} {...restProps}>{children}</p>
  )
}

export default Paragraph
