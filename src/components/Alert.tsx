import { ReactNode } from "react"

interface Props{
  children: String;
  updateParentState: (newState: boolean) => void;
}
const Alert = ({children, updateParentState}: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          updateParentState(false);
        }}
      ></button>
    </div>
  );
}

export default Alert