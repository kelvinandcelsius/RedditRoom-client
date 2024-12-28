import { Component } from '@angular/core'
import { RedditService } from '../../services/reddit.service'
import { FullTableComponent } from '../results-table/full-table/full-table.component'
import { PostSortingOption } from '../../consts/postingSortOptions'
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'
import { Post } from '../../model/redditPost'
import { getPieChartOptions, getEmptyPieChartOptions } from '../../utils/pie-chart-utils'

@Component({
  selector: 'app-dashboard',
  imports: [FullTableComponent, CanvasJSAngularChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  posts: Post[] = []
  subreddit: string = ''
  sorting: PostSortingOption = ''
  errorMessage: string = ''
  fallbackMessage: string[] = []
  pieChartOptions: any = {}
  lineChartOptions: any = {}

  constructor(private redditService: RedditService) {
    this.pieChartOptions = getEmptyPieChartOptions()
  }

  fetchData() {

    if (!this.subreddit) {
      this.errorMessage = 'Please type a subreddit'
      return
    }

    this.redditService
      .fetchPosts(this.subreddit, this.sorting)
      .subscribe({
        next: (data) => {
          this.posts = data
          this.errorMessage = ''
          this.fallbackMessage = data.find((post: any) => post.sentimentFallback)?.sentimentMessage || ''
          this.updateChartOptions()
        },
        error: (err: Error) => {
          if (err.message.includes('not found')) {
            this.errorMessage = `Subreddit '${this.subreddit}' does not exist`
          } else {
            this.errorMessage = 'An error occurred while fetching posts'
          }
          console.error('Error fetching posts:', err)
        },
      })
  }

  onInputChange() {
    this.errorMessage = ''
  }

  onSubredditChange(newSubreddit: string) {
    this.subreddit = newSubreddit
    this.fetchData()
  }

  onSortingChange(newSorting: PostSortingOption) {
    this.sorting = newSorting
    this.fetchData()
  }

  updateChartOptions() {
    this.pieChartOptions = getPieChartOptions(this.posts)
  }
}
