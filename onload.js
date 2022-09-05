(() => {
  window.addEventListener("load", () => {
    const sketch = new Sketch();

    const sketchContainer = document.getElementById("sketch-container");

    sketch.makeSketch(sketchContainer);
  });
})();
