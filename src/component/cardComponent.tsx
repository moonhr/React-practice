import React, { useEffect, useState } from "react";
import "../style.css";

const CardComponent: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/public/static/textFile.txt") // 경로 설정
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error("Error fetching text file:", error));
  }, []);

  return (
    <div className="cardflex">
      <div className="card"></div>
      <div className="card">
        <div className="cardContainer"></div>
        <div className="cardTitle">INDENTATION</div>
        <div className="cardLine"></div>
        <div className="cardText">{text}</div>
      </div>
      <div className="card">
        <div className="cardContainer"></div>
        <div className="cardTitle">INDENTATION</div>
        <div className="cardLine"></div>
        <div className="cardText">{text}</div>
      </div>
    </div>
  );
};

export default CardComponent;
