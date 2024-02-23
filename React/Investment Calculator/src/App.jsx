import { useState } from "react";
import React from "react";
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";

function App() {

const[userInput,setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,

});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier,newValue){
  setUserInput(previousUserInput =>{
      return {
          ...previousUserInput,
          [inputIdentifier]: +newValue
      };
  });
}


  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange = {handleChange} />
      {!inputIsValid && <p>Please Enter Duration greater than Zero</p>}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
