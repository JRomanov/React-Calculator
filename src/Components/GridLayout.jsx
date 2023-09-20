import "./GridLayout.css"

function cat (values, index) {
    return (
      <div class="col" style={{paddingLeft: "0px", paddingRight: "0px"}} key={index+"a"}>
        <button type="button" class="btn" style={{width: "100%", borderRadius: "0px", fontWeight: "bold"}}>{values}</button>
        {/* onclick on buttons, based on what is clicked, need to perfrom calc, remember useState, useState will only work on capitalized functions */}
    </div>
    );
}

function Dog ({values}) {
  return (
    <div class="container text-center">
        <div class="row row-cols-auto">
          {
            values.map(cat)
          }
        </div>
      </div>
  );
}

function GridLayout() {
  const [calcs, setCalcs] = useState("")
  return (
    <div className="GridLayout">
      <input type="" onChange={ (event) => {
        setCalcs (event.target.value)
      }} value={calcs} />
      {
        [
          ["7", "8", "9", "+", "C"], 
          ["4", "5", "6", "-", "x^2"], 
          ["1", "2", "3", "x", "√x"], 
          ["0", ".", "+/-", "/", "="]
        ].map( (characters, index) => {
          return <Dog values={characters} key={index}/>
        })
      }
    </div>
  );
}

export default GridLayout;
