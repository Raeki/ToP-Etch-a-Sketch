(() => {
  window.addEventListener("load", () => {
    const sketch = new Sketch();

    sketch.makeSketch(document.getElementById("sketch-container"));

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
