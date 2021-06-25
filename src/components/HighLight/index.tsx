import {AllHTMLAttributes, FC} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

interface Props extends AllHTMLAttributes<HTMLSpanElement> {

}

const HighLight: FC<Props> = (props) => {
  const {children, className, ...restProps} = props;

  return (
    <span {...restProps} className={classNames(className, styles.highlight)}>
      {children}
    </span>
  )
}

export default HighLight
