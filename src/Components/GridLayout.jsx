import "./GridLayout.css"

function GridLayout() {
  return (
    <div className="GridLayout">
      <div class="container text-center">
        <div class="row row-cols-auto">
          <div class="col">7</div>
          <div class="col">8</div>
          <div class="col">9</div>
          <div class="col">+</div>
          <div class="col">C</div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row row-cols-auto">
          <div class="col">4</div>
          <div class="col">5</div>
          <div class="col">6</div>
          <div class="col">-</div>
          <div class="col">x^2</div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row row-cols-auto">
          <div class="col">1</div>
          <div class="col">2</div>
          <div class="col">3</div>
          <div class="col">x</div>
          <div class="col">√x</div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row row-cols-auto">
          <div class="col">0</div>
          <div class="col">.</div>
          <div class="col">+/-</div>
          <div class="col">/</div>
          <div class="col">=</div>
        </div>
      </div>
    </div>
  );
}

export default GridLayout;
