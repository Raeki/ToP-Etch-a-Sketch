(() => {
  window.addEventListener("load", () => {
    const sketch = document.getElementById("etch-a-sketch");
    const test = document.createElement("div");
    test.innerText = "hello world";
    sketch.append(test);
  });
})();
