import "./GridLayout.css"
import { useState } from "react";

function ButtonLayout ({singleValue, index, setCalcs}) {
    return (
      <div className="col" style={{paddingLeft: "0px", paddingRight: "0px"}} key={index+"a"}>
        <button 
          type="button" 
          className="btn" 
          onClick={ () => { 
            setCalcs( (previousValue) => {
              if (singleValue === "C") {
                return ""
              } else if (singleValue === "=") {
                return /* split String. add numbers in returned Array. return result as a string */
              } else {
                return previousValue + singleValue
              }
            }) 
          }} 
          style={{width: "100%", borderRadius: "0px", fontWeight: "bold"}}>{singleValue}
        </button>
    </div>
    );
}

function ColumLayout ({values, setCalcs}) {
  return (
    <div className="container text-center">
        <div className="row row-cols-auto">
          {
            values.map( (value, index) => {
              return <ButtonLayout singleValue={value} key={index} setCalcs={setCalcs}/>
            })
          }
        </div>
      </div>
  );
}

  function GridLayout() {
  const [calcs, setCalcs] = useState("") 
  return (
    <div className="GridLayout">
      { <input type="" className="output" onChange={ (event) => {
        setCalcs (event.target.value)
      }} value={calcs} /> 
      } 
      {
        [
          ["7", "8", "9", "+", "C"], 
          ["4", "5", "6", "-", "x^2"], 
          ["1", "2", "3", "x", "√x"], 
          ["0", ".", "+/-", "/", "="]
        ].map( (characters, index) => {
          return <ColumLayout values={characters} key={index} setCalcs={setCalcs}/>
        })
      }
    </div>
  );
}

export default GridLayout;
