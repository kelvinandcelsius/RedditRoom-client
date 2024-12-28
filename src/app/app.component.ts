import { Component } from '@angular/core'
import { DashboardComponent } from "./components/dashboard/dashboard.component"
import { RedditService } from './services/reddit.service'

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


}
