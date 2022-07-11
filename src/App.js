import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="container">
        <Weather />
        <br />
        <footer>HKP FORECAST</footer>
      </div>
    </div>
  );
}
