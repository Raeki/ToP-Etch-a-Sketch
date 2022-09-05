class Sketch {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.percentWidth = `${(1 / this.width) * 100}%`;
    this.percentHeight = `${(1 / this.height) * 100}%`;
    this.mousedown = false;
  }

  makeSketch(container) {
    for (let i = 1; i <= this.height; i++) {
      const row = this.makeRow(i);
      container.append(row);
    }
  }

  makeRow(rowNum) {
    const row = document.createElement("div");
    row.id = `row-${rowNum}`;
    row.className = "row";

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
    box.style.width = "5px"; //this.percentWidth;
    box.style.height = "5px"; //this.percentWidth;

    box.addEventListener("mouseover", () => {
      console.log(`mouseover ${box.id}`);
      if (this.mousedown) {
        box.style.background = "black";
      }
    });
    return box;
  }
}
