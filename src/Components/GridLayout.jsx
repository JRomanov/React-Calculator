import "./GridLayout.css"
import { Fragment, useState } from "react";
import React from "react";

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
                if ((previousValue).includes("+")) {
                  return (previousValue).split("+").reduce( (accumulator, currentValue) => {
                    return accumulator + parseInt(currentValue)
                  }, 0)
                } else if ((previousValue).includes("-")) {
                  let arr1 = previousValue.split("-")

                  let finalNumber;

                  arr1.forEach( (currentNumber) => {
                    if (finalNumber === undefined) {
                      finalNumber = parseInt(currentNumber)
                    } else {
                      finalNumber = finalNumber - parseInt(currentNumber)
                    }
                  })

                  return finalNumber
                } else if ((previousValue).includes("x")) {
                  let arr1 = previousValue.split("x")
                  let finalNumber;

                  arr1.forEach( (currentNumber) => {
                    if (finalNumber === undefined) {
                      finalNumber = parseInt(currentNumber)
                    } else {
                      finalNumber = finalNumber * parseInt(currentNumber)
                    }
                  })
                  return finalNumber
                } else if ((previousValue).includes("/")) {
                  let arr1 = previousValue.split("/")
                  let finalNumber;

                  arr1.forEach( (currentNumber) => {
                    if (finalNumber === undefined) {
                      finalNumber = parseInt(currentNumber)
                    } else {
                      finalNumber = finalNumber / parseInt(currentNumber)
                    }
                  })
                  return finalNumber
                }
              }  else if (singleValue === "=" && singleValue === "-") {
                return (previousValue + singleValue).split("-").reduce( (accumulator, currentValue) => {
                  return accumulator - parseInt(currentValue)
                }, 0)
                }  else {
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
