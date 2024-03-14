import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

let onClick = () => {console.log("clicked")};
function App() {
  let [flag, setFlag] = useState(false);
  const updateParentState = (newState: boolean) => {
    setFlag(newState);
  }
  return (
    <div>
      {flag == true ? (
        <Alert updateParentState={updateParentState}>Alert</Alert>
      ) : null}
      <Button updateParentState={updateParentState}>My Button</Button>
    </div>
  );
}
export default App;
