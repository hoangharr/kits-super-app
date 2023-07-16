import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "./App.css";

function Calc() {
  let [input, setInput] = useState("");
  let [currentNumber, setCurrentNumber] = useState("");
  let [operator, setOperator] = useState("");

  return (
    <div className="App">
      <div className="calc">
        <Input input={input}>{input}</Input>

        <div className="first-row">
          <Button myClick={() => setInput(`${input}`.slice(0, -1))}>
            Back
          </Button>
          <Button
            myClick={() => {
              setInput("");
              setOperator("");
            }}
          >
            AC
          </Button>
        </div>
        <div className="buttons">
          <Button myClick={() => setInput(input + 1)}>1</Button>
          <Button myClick={() => setInput(input + 2)}>2</Button>
          <Button myClick={() => setInput(input + 3)}>3</Button>
          <Button
            myClick={() => {
              setCurrentNumber(input);
              setOperator("*");
              setInput("");
            }}
          >
            *
          </Button>

          <Button myClick={() => setInput(input + 4)}>4</Button>
          <Button myClick={() => setInput(input + 5)}>5</Button>
          <Button myClick={() => setInput(input + 6)}>6</Button>
          <Button
            myClick={() => {
              setCurrentNumber(input);
              setOperator("/");
              setInput("");
            }}
          >
            /
          </Button>

          <Button myClick={() => setInput(input + 7)}>7</Button>
          <Button myClick={() => setInput(input + 8)}>8</Button>
          <Button myClick={() => setInput(input + 9)}>9</Button>
          <Button
            myClick={() => {
              setCurrentNumber(input);
              setOperator("+");
              setInput("");
            }}
          >
            +
          </Button>

          <Button myClick={() => setInput((input = +input * -1))}>+/-</Button>
          <Button myClick={() => setInput(input + 0)}>0</Button>

          <Button
            myClick={() => {
              if (operator === "+") {
                setInput(currentNumber * 1 + input * 1);
              } else if (operator === "-") {
                setInput(currentNumber * 1 - input * 1);
              } else if (operator === "*") {
                setInput(currentNumber * 1 * (input * 1));
              } else if (operator === "/") {
                setInput((currentNumber * 1) / (input * 1));
              } else {
                throw new Error("There is something wrong!");
              }
              // setOperator("");
            }}
          >
            =
          </Button>
          <Button
            myClick={() => {
              setCurrentNumber(input);
              setOperator("-");
              setInput("");
            }}
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
