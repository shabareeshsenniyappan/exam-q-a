import React, { useContext } from "react";
import { QaContext } from "../../service/QaContext";
import "./question.css";

function Question() {
  const qa = useContext(QaContext);
  return (
    <div className={"question-container"}>
      {qa.qa?.questions[qa.qaIndex]?.question}
    </div>
  );
}

export default Question;
