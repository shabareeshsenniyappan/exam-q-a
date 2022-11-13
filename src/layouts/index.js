import React, { useContext } from "react";
import Answer from "../components/answer/answer";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Question from "../components/question/question";
import { QaContext } from "../service/QaContext";

function LandingPage() {
  const qa = useContext(QaContext);
  return (
    <div>
      <Header />
      <Question />
      <Answer />
      <Footer />
    </div>
  );
}

export default LandingPage;
