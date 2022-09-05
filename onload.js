(() => {
  window.addEventListener("load", () => {
    const sketch = new Sketch();

    const sketchContainer = document.getElementById("sketch-container");

    sketch.makeSketch(sketchContainer);

    document.addEventListener("mousedown", () => {
      sketch.mousedown = true;
    });
    document.addEventListener("mouseup", () => {
      sketch.mousedown = false;
    });
  });
})();
