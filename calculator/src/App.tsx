// Imports
import React, { useState } from 'react';
import './App.css';

function App() {
  const [result,setResult]=useState<string>("");
  //function for each button
  const handleButton=(label: string):void=>{
    switch (label ) {
      case "AC":{
        setResult("");
        break;
      }
      case "DE":{
        setResult((prevResult)=>prevResult.slice(0,-1));
        break;
      }
      //evaluate function is used for calculation
      case "=":{
        setResult((prevResult)=>eval(prevResult));
        break;
      }
      default:{
        setResult((prevResult) => prevResult + label);
        
      }
    }
  }
  return (
    <div className='heading'>
      <h1>Calculator</h1>
    <div className="container">
    
      <div className='calc'>
        {/* output will be seen here */}
        <div id="disp" >
          <p id='res' title={result}>{result}</p>
        </div>
        <div >
        <button  className='color' onClick={() => handleButton("AC")}>AC</button>
        <button  className='color' onClick={() => handleButton("DE")}>DE</button>
        <button  className='color' onClick={() => handleButton(".")}>.</button>
        <button  className='color' onClick={() => handleButton("/")}>/</button>
        </div>
        <div>
        <button onClick={() => handleButton("7")}>7</button>
        <button onClick={() => handleButton("8")}>8</button>
        <button onClick={() => handleButton("9")}>9</button>
        <button className='color' onClick={() => handleButton("*")}>*</button>
        </div>
        <div>
        <button onClick={() => handleButton("4")}>4</button>
        <button onClick={() => handleButton("5")}>5</button>
        <button onClick={() => handleButton("6")}>6</button>
        <button className='color' onClick={() => handleButton("-")}>-</button>
        </div>
        <div>
        <button onClick={() => handleButton("1")}>1</button>
        <button onClick={() => handleButton("2")}>2</button>
        <button onClick={() => handleButton("3")}>3</button>
        <button className='color' onClick={() => handleButton("+")}>+</button>
        </div>
        <div>
        <button onClick={() => handleButton("00")}>00</button>
        <button onClick={() => handleButton("0")}>0</button>
        <button className='equal color' onClick={() => handleButton("=")}>=</button>
        
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
