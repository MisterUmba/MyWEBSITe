const Cell_Status = {
  HID: 0,
  EXPLODE: 1,
  FLAG: 2,
  REVEAL: 3
}

const Cell_values = {
  BOOM: -1,
  BLANK: 0,
  NUMBER: 1,
}

class Cell {
  constructor(status, value) {
    this.status = status;
    this.value = value;
  }

  reveal() {
    if (this.value === Cell_values.BOOM) {
      this.status = Cell_Status.EXPLODE;
    } else if (this.value === Cell_values.BLANK) {
      this.status = Cell_Status.REVEAL;
    } else {
      this.status = Cell_Status.NUMBER;
    }
  }

  flag() {
    this.status = Cell_Status.FLAG;
  }
}

class Model {
  constructor(column = 8, rows = 8, boom_rate = 15.6) {
    this.grid = [];
    this.columns = column;
    this.rows = rows;
    this.timer = 0;
    this.status = "smile";
    this.flag_count = 0;
    this.boom_rate = boom_rate;
  }

  generate() {
    // empty grid
    this.grid.length = 0;

    // generate grid by rows and columns
    for (let r = 0; r < this.rows; r++) {
      this.grid.push([]);

      for (let c = 0; c < this.columns; c++) {
        this.grid[r].push(new Cell(Cell_Status.HID, Cell_values.BLANK));
      }
    }

    // Place the booms randomly
    let numOfBooms = Math.ceil((this.boom_rate / 100) * (this.rows * this.columns));

    while (numOfBooms > 0) {
      const randx = Math.floor(Math.random() * this.columns);
      const randy = Math.floor(Math.random() * this.rows);

      if (this.grid[randy][randx].value === Cell_values.BLANK) {
        this.grid[randy][randx].value = Cell_values.BOOM;
        numOfBooms--;
      }
    }

    // Generate boom neighbor number values
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        let counter = 0;
        // for top row until bottom row
        for (let ri = Math.max(0, r - 1); ri <= Math.min(r + 1, this.rows - 1); ri++) {
          // for left column until right column
          for (let ci = Math.max(0, c - 1); ci <= Math.min(c + 1, this.columns - 1); ci++) {
            if (ri == r && ci == c) continue;
            if (this.grid[ri][ci].value == Cell_values.BOOM) { counter++ }
          }
        }

        if (this.grid[r][c].value === Cell_values.BOOM) {
          continue;
        } else {
          this.grid[r][c].value = counter;
        }

      }
    }
  }

  pick(row, column) {

  }

  toString() {
    let temp = "";
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        temp += "\t" + this.grid[r][c].value;
      }
      temp += '\n';
    }

    return temp;
  }
}