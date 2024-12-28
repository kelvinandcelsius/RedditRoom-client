import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})

export class RedditService {
  private baseUrl = `${environment.apiUrl}/reddit`

  constructor(private http: HttpClient) { }

  fetchPosts(subreddit: string, sorting: string): Observable<any> {
    const params = new HttpParams()
      .set('subreddit', subreddit)
      .set('sorting', sorting)

    return this.http.get(`${this.baseUrl}/analyze`, { params }).pipe(
      catchError((error) => {
        if (error.status === 404) {
          const errorMessage = error.error?.error || `Subreddit '${subreddit}' not found`
          return throwError(() => new Error(errorMessage))
        }
        return throwError(() => new Error('An error occurred while fetching posts'))
      }))
  }
}
