import { Component, Input, Output, EventEmitter } from '@angular/core'
import { InputFieldComponent } from "../input-field/input-field.component"
import { SelectFieldComponent } from "../select-field/select-field.component"
import { TableComponent } from "../table/table.component"
import { PostSortingOption } from '../../../consts/postingSortOptions'

@Component({
  selector: 'app-full-table',
  imports: [InputFieldComponent, SelectFieldComponent, TableComponent],
  templateUrl: './full-table.component.html',
  styleUrl: './full-table.component.css'
})

export class FullTableComponent {
  @Input() subreddit: string = ''
  @Input() sorting: PostSortingOption = ''
  @Input() posts: any[] = []
  @Input() errorMessage: string = ''

  @Output() subredditChange = new EventEmitter<string>()
  @Output() sortingChange = new EventEmitter<PostSortingOption>()
  @Output() inputChange = new EventEmitter<void>()

  onSubredditChange(newSubreddit: string) {
    this.subredditChange.emit(newSubreddit)
  }

  onSortingChange(newSorting: PostSortingOption) {
    this.sortingChange.emit(newSorting)
  }

  onInputChange() {
    this.inputChange.emit()
  }
}
