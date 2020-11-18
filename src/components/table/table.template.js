const CODES = {
  A: 65,
  Z: 90,
}

const toCell = (_, index) => {
  return `
    <div class="cell" contenteditable data-index="${index}">
    </div>
  `
}

const toColumn = (col, index) => {
  return `
    <div class="column" data-type="resizable" data-index="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

const createRow = (index, content) => {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="row">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

const toChar = (_, index) => {
  return String.fromCharCode(CODES.A + index)
}

const createTable = (rowsCount = 20) => {
  const colsCount = CODES.Z - CODES.A
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  rows.push(createRow(null, cols))
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}

export { createTable }
