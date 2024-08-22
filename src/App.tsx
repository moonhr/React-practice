import React from "react";
import "./style.css";
import CardComponent from "./component/cardComponent";

const App: React.FC = () => {
  return (
    <div id="root" className="root">
      <CardComponent />
      <div className="arrowDot" />
      <div className="vertical">
        <div className="verticalLine" />
        <div className="verticalDot" />
      </div>
    </div>
  );
};

export default App;
