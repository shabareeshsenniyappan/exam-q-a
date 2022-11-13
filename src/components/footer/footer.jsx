import React, { useContext } from "react";
import { QaContext } from "../../service/QaContext";
import "./footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  //context API
  const qa = useContext(QaContext);
  //router navigation
  let navigate = useNavigate();
  //function on submitto craete an result object
  const onSubmit = () => {
    let tmp = [];
    qa.qa?.questions?.forEach((quest, index) => {
      let filterSelected = quest.questionoption?.filter(
        (fil) => fil.selected === true
      );
      tmp.push({ question: quest.question, answer: filterSelected[0] });
    });
    qa.setselectedOptions([...tmp]);
    navigate("/result");
  };

  return (
    <div className={"footer-container"}>
      <button
        className={"but-res answer-prev-button"}
        onClick={() => {
          if (qa.qaIndex > 0) qa.setQaIndex(qa.qaIndex - 1);
        }}
      >
        Prev
      </button>
      <button
        className={"but-res answer-nxt-button"}
        onClick={() => {
          if (qa.qaIndex < qa.qa.questions.length - 1) {
            qa.setQaIndex(qa.qaIndex + 1);
          } else {
            onSubmit();
          }
        }}
      >
        {qa.qaIndex === qa.qa.questions.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default Footer;
