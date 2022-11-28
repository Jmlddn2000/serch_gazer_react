import {useEffect} from "react";

function App() {

  useEffect(() => {
    const webgazer = window.webgazer
    webgazer.setGazeListener((data, clock)=>{
      console.log(data, clock)
    }).begin()})
  return (
    <div className="App">
      <h1>halo</h1>
    </div>
  );
}

export default App;
