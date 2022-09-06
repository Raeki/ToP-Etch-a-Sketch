class Sketch {
  constructor() {
    this.width = 16;
    this.height = 16;
    this.percentWidth;
    this.percentHeight;
    this.mousedown = false;
  }

  makeSketch(container) {
    this.percentWidth = `${(1 / this.width) * 100}%`;
    this.percentHeight = `${(1 / this.height) * 100}%`;

    for (let i = 1; i <= this.height; i++) {
      const row = this.makeRow(i);
      container.append(row);
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
    return box;
  }

  makeColor() {
    return "black";
  }
}
