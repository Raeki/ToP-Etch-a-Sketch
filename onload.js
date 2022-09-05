(() => {
  window.addEventListener("load", () => {
    const sketch = new Sketch();

    const sketchContainer = document.getElementById("sketch-container");

    sketch.makeSketch(sketchContainer);

    document.addEventListener("mousedown", () => {
      sketch.mousedown = true;
      console.log("mousedown");
    });
    document.addEventListener("mouseup", () => {
      console.log("mouseup");
      sketch.mousedown = false;
    });
  });
})();
