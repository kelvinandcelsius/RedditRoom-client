import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Post } from '../../../model/redditPost'

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  @Input() posts: Post[] = []

  formattedDate = new Date()
}
