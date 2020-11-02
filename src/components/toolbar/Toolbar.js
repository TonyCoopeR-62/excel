import { ExcelComponent } from '@core/ExcelComponent'

class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  toHTML() {
    return `
    <div>
      <div class="button" data-title="Text align left">
        <i class="material-icons">format_align_left</i>
      </div>
      <div class="button" data-title="Text align center">
        <i class="material-icons">format_align_center</i>
      </div>
      <div class="button" data-title="Text align right">
        <i class="material-icons">format_align_right</i>
      </div>
      <div class="button" data-title="Bold text">
        <i class="material-icons">format_bold</i>
      </div>
      <div class="button" data-title="Italic text">
        <i class="material-icons">format_italic</i>
      </div>
      <div class="button" data-title="Underline text">
        <i class="material-icons">format_underline</i>
      </div>
    </div>
  `
  }
}

export { Toolbar }
