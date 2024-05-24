import Weather from "./Weather";
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
      <Weather defaultCity={"Paris"} />
     </div>
    </div>
  );
}

export default App;
