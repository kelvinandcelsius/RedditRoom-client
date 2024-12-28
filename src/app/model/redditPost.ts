import { Sentiment } from "./sentiment"

export interface Post {
    title: string
    upvotes: number
    comments: number
    date: Date
    sentiment: Sentiment
}