(() => {
  window.addEventListener("load", () => {
    const sketchContainer = document.getElementById("sketch-container");
    const sketch = new Sketch(sketchContainer);

    const slider = document.getElementById("slider");
    const sliderValue = document.getElementById("slider-value");
    sliderValue.innerText = slider.value;
    const sliderButton = document.getElementById("slider-button");

    const resetButton = document.getElementById("reset-button");
    const rainbowButton = document.getElementById("rainbow-button");

    sketch.makeSketch();

    // mouse logic
    document.addEventListener("mousedown", e => {
      sketch.mousedown = true;
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
      sketch.reset();
    });
    resetButton.addEventListener("click", () => {
      sketchContainer.innerHTML = "";
      sketch.reset();
    });
    rainbowButton.addEventListener("click", () => {
      if (!sketch.rainbow) {
        sketch.rainbow = true;
        rainbowButton.innerText = "RAINBOW ON";
      } else {
        sketch.rainbow = false;
        rainbowButton.innerText = "RAINBOW OFF";
      }
      sketch.reset();
    });
  });
})();
