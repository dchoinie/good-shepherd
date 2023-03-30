import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../types/common";
import * as styles from "../styles/button.module.scss"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const sizeMap = {
  larger: styles.btnLarger,
  large: styles.btnLarge,
  medium: styles.btnMedium,
  small: styles.btnSmall,
  smaller: styles.btnSmaller,
} as any;

const themeMap = {
  primary: styles.btnPrimary,
  secondary: styles.btnSecondary,
  accent: styles.btnAccent,
  white: styles.btnWhite,
  primaryOutline: styles.btnPrimaryOutline,
  secondaryOutline: styles.btnSecondaryOutline,
  accentOutline: styles.accentOutline,
} as any;

const ButtonComponent = ({
  label,
  size = "medium",
  theme,
  startIcon,
  endIcon,
  disabled,
  onClick,
  classes,
  link = "/",
  onChange,
  href,
  download,
  disableTargetBlank,
  submissionInProgress,
  pill = false,
}: Button): JSX.Element => {
  const getLinkType = (): JSX.Element => {
    if (href) {
      return (
        <a
          href={href}
          className={cx(
            styles.btn,
            "capitalize",
            size.toLowerCase() && sizeMap[size],
            theme?.toLowerCase() && themeMap[theme],
            pill ? styles.pill : '',
            classes,
          )}
          target={disableTargetBlank ? undefined : "_blank"}
          rel="noopener noreferrer"
          download={download}
        >
          {startIcon && <FontAwesomeIcon icon={startIcon as IconProp} className="mr-2" />}
          <span>{label}</span>
          {endIcon && <FontAwesomeIcon icon={endIcon as IconProp} className="ml-2" />}
        </a>
      );
    }
    return (
      <Link
        to={link}
        className={cx(
          styles.btn,
          "capitalize",
          size.toLowerCase() && sizeMap[size],
          theme?.toLowerCase() && themeMap[theme],
          pill ? styles.pill : '',
          classes,
        )}
      >
        {startIcon && <FontAwesomeIcon icon={startIcon as IconProp} className="mr-2" />}
        <span>{label}</span>
        {endIcon && <FontAwesomeIcon icon={endIcon as IconProp} className="ml-2" />}
      </Link>
    );
  };
  return (
    <>
      {onClick ? (
        <button
          onClick={onClick}
          onChange={onChange}
          className={cx(
            styles.btn,
            "capitalize",
            size && sizeMap[size],
            theme && themeMap[theme],
            pill ? styles.pill : '',
            classes
          )}
          disabled={disabled || submissionInProgress}
        >
          {startIcon && <FontAwesomeIcon icon={startIcon as IconProp} className="mr-2" />}
          <span>{label}</span>
          {endIcon && <FontAwesomeIcon icon={endIcon as IconProp} className="ml-2" />}
        </button>
      ) : (
        <>{getLinkType()}</>
      )}
    </>
  );
};

export default ButtonComponent;