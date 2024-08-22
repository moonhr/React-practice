import React from "react";

const App: React.FC = () => {
  let styles: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
  };

  let elementData = {
    loginInput: {
      textNode: "input",
    },
    loginSubmit: {
      textNode: "click",
    },
  }

  const loginSubmit = () => {
    alert("hello");
  };
  return (
    <div>
      <div id="login" style={styles}>
        <div id="login-input">{elementData.loginInput.textNode}</div>
        <div id="login-submit" onClick={loginSubmit}>
          {elementData.loginSubmit.textNode}
        </div>
      </div>
    </div>
  );
};

export default App;