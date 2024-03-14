import { useState } from "react";

interface Props {
  children: String;
  updateParentState: (newState: boolean) => void;
}
const Button = ({ children, updateParentState }: Props) => {
  let [flag, setFlag] = useState(false);
  return (
    <div
      className="btn btn-primary"
      onClick={() => {
        updateParentState(true);
      }}
    >
      {children}
    </div>
  );
};

export default Button;
