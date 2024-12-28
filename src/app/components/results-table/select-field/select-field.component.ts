import { Component, Input, Output, EventEmitter } from '@angular/core'
import { postSortingOptions, PostSortingOption } from '../../../consts/postingSortOptions'

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css',
})

export class SelectFieldComponent {
  postSortingOptions = postSortingOptions
  @Input() selectedOption: PostSortingOption = ''

  @Output() selectedOptionChange = new EventEmitter<PostSortingOption>()

  onChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement
    this.selectedOption = selectElement.value as PostSortingOption
    this.selectedOptionChange.emit(this.selectedOption)
  }

}
