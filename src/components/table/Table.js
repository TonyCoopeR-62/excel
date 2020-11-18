import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from './table.template'
import { $ } from '../../core/dom'
class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const selectorIndex = $parent.data.index
      const coords = $parent.getCoords()
      const cells = this.$root.findAll(`[data-index="${selectorIndex}"]`)
      event.target.style.height = '30px'
      document.onmousemove = e => {
        console.log('mousemove')
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        $parent.$el.style.width = value + 'px'
        cells.forEach(el => el.style.width = value + 'px')
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}

export { Table }
