class Sketch {
  constructor(container) {
    this.container = container;
    this.width = 16;
    this.height = 16;
    this.percentWidth;
    this.percentHeight;
    this.mousedown = false;
    this.rainbow = false;
  }

  makeSketch() {
    this.percentWidth = `${(1 / this.width) * 100}%`;
    this.percentHeight = `${(1 / this.height) * 100}%`;

    for (let i = 1; i <= this.height; i++) {
      const row = this.makeRow(i);
      this.container.append(row);
    }
  }

  makeRow(rowNum) {
    const row = document.createElement("div");
    row.id = `row-${rowNum}`;
    row.className = "row";
    row.style.height = this.percentHeight;

    for (let i = 1; i <= this.width; i++) {
      const box = this.makeBox(rowNum, i);
      row.append(box);
    }

    return row;
  }

  makeBox(row, column) {
    const box = document.createElement("div");

    box.id = `row-${row}-column-${column}`;
    box.className = "box";
    box.style.width = this.percentWidth;

    box.addEventListener("mouseover", () => {
      if (this.mousedown) {
        box.style.background = this.makeColor();
      }
    });
    box.addEventListener("mousedown", () => {
      box.style.background = this.makeColor();
    });
    return box;
  }

  makeColor() {
    if (this.rainbow) {
      return `RGB(${this.makeRGBValue()}, ${this.makeRGBValue()}, ${this.makeRGBValue()})`;
    }
    return "black";
  }

  makeRGBValue() {
    return Math.round(Math.random() * 255);
  }

  reset() {
    this.container.innerHTML = "";
    this.makeSketch();
  }
}
