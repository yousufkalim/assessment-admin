import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import UserForm from "components/Home/UserForm";
import Questions from "components/Home/Questions";
import Result from "components/Home/Result";
import Landing from "components/Home/Landing";
import Header from "components/Home/Header";
import Stepper from "components/Home/Stepper";

const Home = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [step, setStep] = useState(0);
  const [statetextforscroll, setStatetextforscroll] = useState("");

  return (
    <div className="home-root">
      <Header
        step={step}
        setStep={setStep}
        setActiveStep={setActiveStep}
        setStatetextforscroll={setStatetextforscroll}
      />
      {step === 0 && (
        <Landing
          step={step}
          setStep={setStep}
          statetextforscroll={statetextforscroll}
        />
      )}
      <div className="mainbody">
        {step >= 1 && (
          <Grid spacing={1} className="stepper">
            <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
          </Grid>
        )}
        {step === 1 && (
          <UserForm
            step={step}
            setStep={setStep}
            setActiveStep={setActiveStep}
          />
        )}
        {step === 2 && (
          <Questions
            step={step}
            setStep={setStep}
            setActiveStep={setActiveStep}
          />
        )}
        {console.log("step is ", step)}
        {step === 3 && <Result />}
      </div>
    </div>
  );
};

export default Home;
