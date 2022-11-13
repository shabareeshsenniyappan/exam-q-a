import React, { useContext } from "react";
import { QaContext } from "../../service/QaContext";
import "./result.css";

function Result() {
  //context API
  const qa = useContext(QaContext);
  return (
    <div className={"res-cont"}>
      {qa.selectedOptions?.map((qas, index) => (
        <>
          <div className={"question-cont"}>
            {index + 1}) {qas.question}
          </div>
          <div className={"ans-cont"}>Answer : {qas.answer.optionvalue}</div>
        </>
      ))}
    </div>
  );
}

export default Result;
