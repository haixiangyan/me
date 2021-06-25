import {ButtonHTMLAttributes, CSSProperties, FC, useCallback, useState} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  pulse?: boolean;
  iconSrc?: string;
  background?: string;
}

const Button: FC<Props> = (props) => {
  const {pulse, background, iconSrc, children, className, ...restProps} = props;

  const [buttonStyle, setButtonStyle] = useState<CSSProperties>({
    background,
    borderColor: background,
  })

  const onMouseEnter = useCallback(() => {
    setButtonStyle({...buttonStyle, background: 'white', color: background || 'black', textShadow: 'none'})
  }, [background, buttonStyle]);

  const onMouseLeave = useCallback(() => {
    setButtonStyle({background, borderColor: background, color: 'white'})
  }, [background]);

  return (
    <button
      {...restProps}
      className={classNames(className, styles.button, {[styles.pulse]: pulse})}
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
