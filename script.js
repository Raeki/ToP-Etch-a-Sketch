(() => {
  window.addEventListener("load", () => {
    const sketch = new Sketch();
    const sketchContainer = document.getElementById("sketch-container");
    const slider = document.getElementById("slider");
    const sliderValue = document.getElementById("slider-value");
    sliderValue.innerText = slider.value;
    const sliderButton = document.getElementById("slider-button");
    const resetButton = document.getElementById("reset-button");

    sketch.makeSketch(sketchContainer);

    // mouse logic
    document.addEventListener("mousedown", e => {
      sketch.mousedown = true;
      e.preventDefault();
    });
    document.addEventListener("mouseup", () => {
      sketch.mousedown = false;
    });

    // button logic
    slider.addEventListener("input", () => {
      sliderValue.innerText = slider.value;
    });
    sliderButton.addEventListener("click", () => {
      sketch.width = slider.value;
      sketch.height = slider.value;
      sketchContainer.innerHTML = "";
      sketch.makeSketch(sketchContainer);
    });
    resetButton.addEventListener("click", () => {
      sketchContainer.innerHTML = "";
      sketch.makeSketch(sketchContainer);
    });
  });
})();
