import React, { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";

function App() {
  const arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrayOperator1 = ["AC", "+/-", "%"];
  const arrayOperator2 = ["-", "+", "*", "/", "="];
  const [inputValue, setInputValue] = useState("");
  const handleButtonClick = (value) => {
    //setInputValue((prevValue) => prevValue + value);
    switch (value) {
      case "=":
        try {
          const result = eval(inputValue);
          setInputValue(
            result !== undefined && result !== null ? result.toString() : ""
          );
        } catch (error) {
          setInputValue("Error");
        }
        break;
      case "AC":
        setInputValue("");
        break;
      case "+/-":
        setInputValue((prevValue) =>
          prevValue.length > 2
            ? prevValue
            : prevValue.startsWith("-")
            ? prevValue.slice(1)
            : prevValue.length == 1
            ? `-${prevValue}`
            : prevValue
        );
        break;
      case "%":
        try {
          // Handle percentage calculation
          const percentageResult = (parseFloat(inputValue) / 100).toString();
          setInputValue(percentageResult !== "NaN" ? percentageResult : "");
        } catch (error) {
          setInputValue("Error");
        }
        break;
      default:
        setInputValue((prevValue) => prevValue + value);
    }
  };

  return (
    <div className="App">
      <div className="result">
        <input
          type="text"
          className="result-input"
          placeholder="0"
          value={inputValue}
          readOnly
        />
      </div>
      <div className="container">
        <div className="left">
          <div className="operator1">
            {arrayOperator1.map((operator1) => (
              <Button
                value={operator1}
                type="operator1"
                key={operator1}
                onButtonClick={handleButtonClick}
              />
            ))}
          </div>
          <div className="number">
            {arrayOfNum.map((number) => (
              <Button
                value={number}
                type="number"
                key={number}
                onButtonClick={handleButtonClick}
              />
            ))}
          </div>
          <div className="number-bottom">
            <Button
              value="0"
              type="number0"
              key="number0"
              onButtonClick={handleButtonClick}
            />
            <Button
              value="."
              type="dot"
              key="dot"
              onButtonClick={handleButtonClick}
            />
          </div>
        </div>
        <div className="operator2">
          {arrayOperator2.map((operator2) => (
            <Button
              value={operator2}
              type="operator2"
              key={operator2}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
