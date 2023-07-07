import logo from "./logo.svg";
import "./App.css";

export function tellMeGoodorBad(value) {
  const Message = value;
  if (Message == "Good") {
    return `The response has returned ${Message}`;
  } else {
    return "we got problems";
  }
}

export function doubleMyNumber(number) {
  const numberDoubled = number * 2;
  return `Your number doubled is ${numberDoubled}`;
}

function App() {
  // console.log("Hello World!", 1);
  console.log(tellMeGoodorBad("Good"));
  console.log(doubleMyNumber(8));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my site!</p>
        <p>More work comming soon.</p>
      </header>
    </div>
  );
}

export default App;
