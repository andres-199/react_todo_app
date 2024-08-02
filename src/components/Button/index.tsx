import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps): React.ReactElement => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};
export default Button;
