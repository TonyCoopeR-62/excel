const CODES = {
  A: 65,
  Z: 90,
}

const toCell = content => {
  return `
    <div class="cell" contenteditable>
      ${content}
    </div>
  `
}

const toColumn = col => {
  return `
    <div class="column">
      ${col}
    </div>
  `
}

const createRow = (index, content) => {
  return `
    <div class="row">
      <div class="row-info">${index ? index : ''}</div>
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
