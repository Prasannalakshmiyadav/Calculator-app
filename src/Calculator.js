import React from "react";


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  buttonClicked = (button) => {
    const result = this.state.result;

    if (button === "=") {
      this.calculateResult(result);
    } else if (button === "C") {
      this.clearScreen();
    } else if (button === "DE") {
      this.backspace();
    } else if (button === ".") {
      if (!result.endsWith(".")) {
        this.setState((prevState) => ({
          result: prevState.result + button,
        }));
      }
    } else if (/[\+\-\*\/]/.test(button)) {
      if (/[\+\-\*\/]$/.test(result)) {
        this.setState((prevState) => ({
          result: prevState.result.slice(0, -1) + button,
        }));
      } else {
        this.setState((prevState) => ({
          result: prevState.result + button,
        }));
      }
    } else {
      this.setState((prevState) => ({
        result: prevState.result + button,
      }));
    }
  };

  calculateResult = (result) => {
    try {
      const calculatedResult = eval(result);
      this.setState({
        result: calculatedResult.toString(),
      });
    } catch (error) {
      this.setState({
        result: "Error",
      });
    }
  };

  clearScreen = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState((prevState) => ({
      result: prevState.result.slice(0, -1),
    }));
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <input
            type="text"
            id="result"
            value={this.state.result}
            placeholder="0"
            readOnly
          />
        </div>
        <div className="buttons">
          <button onClick={() => this.clearScreen()}>C</button>
          <button onClick={() => this.backspace()}>DE</button>
          <button onClick={() => this.buttonClicked("/")}>/</button>
          <button onClick={() => this.buttonClicked("*")}>x</button>
          <button onClick={() => this.buttonClicked("7")}>7</button>
          <button onClick={() => this.buttonClicked("8")}>8</button>
          <button onClick={() => this.buttonClicked("9")}>9</button>
          <button onClick={() => this.buttonClicked("-")}>-</button>
          <button onClick={() => this.buttonClicked("4")}>4</button>
          <button onClick={() => this.buttonClicked("5")}>5</button>
          <button onClick={() => this.buttonClicked("6")}>6</button>
          <button onClick={() => this.buttonClicked("+")}>+</button>
          <button onClick={() => this.buttonClicked("1")}>1</button>
          <button onClick={() => this.buttonClicked("2")}>2</button>
          <button onClick={() => this.buttonClicked("3")}>3</button>
          <button onClick={() => this.buttonClicked("=")}>=</button>
          <button onClick={() => this.buttonClicked("0")}>0</button>
          <button onClick={() => this.buttonClicked("00")}>00</button>
          <button onClick={() => this.buttonClicked(".")}>.</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
