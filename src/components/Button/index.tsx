import {ButtonHTMLAttributes, FC, useCallback, useState} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  iconSrc?: string;
  background?: string;
}

const Button: FC<Props> = (props) => {
  const {background, iconSrc, children, className, ...restProps} = props;

  const [buttonStyle, setButtonStyle] = useState({
    background,
    borderColor: background,
    color: 'white'
  })

  const onMouseEnter = useCallback(() => {
    setButtonStyle({...buttonStyle, background: 'white', color: background || 'black'})
  }, []);

  const onMouseLeave = useCallback(() => {
    setButtonStyle({background, borderColor: background, color: 'white'})
  }, []);

  return (
    <button
      {...restProps}
      className={classNames(className, styles.button)}
      style={buttonStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {iconSrc && <img width={24} src={iconSrc} alt="图片"/>}
      <span>{children}</span>
    </button>
  )
}

export default Button
