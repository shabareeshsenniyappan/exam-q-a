import React, { useContext, useState } from "react";
import { QaContext } from "../../service/QaContext";
import "./answer.css";

function Answer() {
  //context
  const qa = useContext(QaContext);

  //function to set selected option foe radio and check box
  function onSelectOption(selectedIndex) {
    let tmp = qa.qa?.questions;
    tmp[qa.qaIndex].questionoption?.forEach((quest, index) => {
      index === selectedIndex
        ? (quest.selected = true)
        : (quest.selected = false);
    });
    qa.setQa({ questions: [...tmp] });
  }
  
  //function to set input  for text area and date
  function onInputChange(selectedDate) {
    let tmp = qa.qa?.questions;
    tmp[qa.qaIndex].questionoption[0].optionvalue = selectedDate;
    tmp[qa.qaIndex].questionoption[0].selected = true;
    qa.setQa({ questions: [...tmp] });
  }
  return (
    <div>
      {qa.qa && qa.qa?.questions[qa.qaIndex]?.questiontype === "Radio" ? (
        <>
          {qa.qa?.questions[qa.qaIndex]?.questionoption?.map((ans, index) => (
            <div className={"answer-container"} key={index}>
              <input
                key={index}
                type="radio"
                name="site_name"
                value={ans.optionvalue}
                checked={ans.selected === true}
                onChange={() => {
                  onSelectOption(index);
                }}
              />
              {ans?.optionvalue}
            </div>
          ))}
        </>
      ) : qa.qa && qa.qa?.questions[qa.qaIndex]?.questiontype === "Date" ? (
        <div className={"answer-container"}>
          <input
            type={"datetime-local"}
            value={
              qa.qa.questions[qa.qaIndex]?.questionoption[0]["optionvalue"]
            }
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
          />
        </div>
      ) : qa.qa && qa.qa?.questions[qa.qaIndex]?.questiontype === "Textarea" ? (
        <div className={"answer-container"}>
          <textarea
            rows="20"
            cols="80"
            value={
              qa.qa.questions[qa.qaIndex]?.questionoption[0]["optionvalue"]
            }
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
          />
        </div>
      ) : (
        <>
          {qa.qa?.questions[qa.qaIndex]?.questionoption?.map((ans, index) => (
            <div className={"answer-container"} key={index}>
              <input
                key={index}
                type="checkbox"
                name="site_name"
                value={ans.optionvalue}
                checked={ans.selected === true}
                onChange={() => {
                  onSelectOption(index);
                }}
              />
              {ans?.optionvalue}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Answer;
