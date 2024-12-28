import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})

export class InputFieldComponent {

  @Input() value: string = ''

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>()
  @Output() inputChange: EventEmitter<void> = new EventEmitter<void>()

  onChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement
    this.value = inputElement.value
    this.inputChange.emit()
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSubmit()
    }
  }

  onSubmit(): void {
    this.valueChange.emit(this.value)
  }
}
