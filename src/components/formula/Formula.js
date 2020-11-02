import { ExcelComponent } from '@core/ExcelComponent'

class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }
  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
  onInput(event) {
    console.log('onInput formula', event)
  }

  onClick(event) {}
}

export { Formula }
