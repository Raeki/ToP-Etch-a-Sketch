class Sketch {
  constructor() {
    this.height = 16;
    this.width = 16;
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
    return box;
  }
}
