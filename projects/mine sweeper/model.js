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
    if (this.value == Cell_values.BOOM) {
      this.status = Cell_Status.EXPLODE;
    } else if (this.value == Cell_values.BLANK) {
      this.status = Cell_Status.REVEAL;
    } else {
      this.status = Cell_Status.NUMBER;
    }
  }

  flag() {
    this.status = Cell_Status.FLAG;
  }
}

