(() => {
  window.addEventListener("load", () => {
    console.log("page loaded");

    const sketch = new Sketch();

    const sketchContainer = document.getElementById("sketch-container");

    sketch.makeSketch(sketchContainer);
  });
})();
