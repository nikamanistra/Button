import { DataLoader } from '../Loaders/Loaders';
import classes from './Button.module.css';

export const buttonTypes = {
  USER: classes.userButton,
  LQS: classes.lqsButton,
  DELETE: classes.deleteButton,
  ACTIVATE: classes.activateButton,
  SECONDARY: classes.secondaryButton,
  RESET: classes.resetButton,
  //New types
  CLEAR: classes.clearButton,
  SQS: classes.sqsButton,
  CANCEL: classes.cancelButton
};

export const Button = ({
  className = '',
  buttonType = '',
  labelClassName = '',
  loading,
  loaderSize = '16px',
  loaderColor = '#fff',
  children,
  subText,
  ...otherProps
}) => {
  return (
    <button
      className={`${classes.button} ${className} ${buttonType}`}
      {...otherProps}
    >
      {loading && (
        <DataLoader
          size={loaderSize}
          color={loaderColor}
          containerClassName={classes.buttonLoader}
        />
      )}
      {children}
      {subText && <span className={classes.buttonSubtext}>{subText}</span>}
    </button>
  );
};
