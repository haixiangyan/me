import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  useCallback,
  useState,
} from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  pulse?: boolean;
  iconSrc?: string;
  bg?: string;
}

const Button: FC<Props> = (props) => {
  const { pulse, bg, iconSrc, children, className, ...restProps } = props;

  const [buttonStyle, setButtonStyle] = useState<CSSProperties>({
    background: bg,
    borderColor: bg,
  });

  const onMouseEnter = useCallback(() => {
    setButtonStyle({
      ...buttonStyle,
      background: "white",
      color: bg || "black",
      textShadow: "none",
    });
  }, [bg, buttonStyle]);

  const onMouseLeave = useCallback(() => {
    setButtonStyle({ background: bg, borderColor: bg, color: "white" });
  }, [bg]);

  return (
    <button
      {...restProps}
      className={classNames(className, styles.button, {
        [styles.pulse]: pulse,
      })}
      style={buttonStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {iconSrc && <img width={24} src={iconSrc} alt="图片" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
