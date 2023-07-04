import logo from "./logo.svg";
import "./App.css";

export function tellMeGoodorBad(value) {
  const Message = value;
  if (Message == "Good") {
    console.log(`The response has returned ${Message}`);
    return `The response has returned ${Message}`;
  } else {
    console.log("we got problems");
    return "we got problems";
  }
}

function App() {
  // console.log("Hello World!", 1);
  tellMeGoodorBad("Good");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my site!</p>
      </header>
    </div>
  );
}

export default App;
