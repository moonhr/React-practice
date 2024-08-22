import React from "react";
import "./style.css";
// import CardComponent from "./component/cardComponent";
import { InputSample } from "./hooks/useRef";

const App: React.FC = () => {
  return (
    <div id="root" className="root">
      <InputSample />
    </div>
  );
};

export default App;
