import { graphColors } from '../consts/graphColors'
import { Post } from '../model/redditPost'

export const getPieChartOptions = (posts: Post[]): any => {

    const sentimentData = posts.reduce((acc: Record<string, number>, post) => {
        const sentiment = post.sentiment
        acc[sentiment] = (acc[sentiment] || 0) + 1
        return acc
    }, {})

    return {
        title: {
            text: "Sentiment Distribution",
            fontFamily: "Arial",
            fontSize: 20,
            fontWeight: "bold",
        },
        data: [{
            type: "pie",
            dataPoints: Object.keys(sentimentData).map(key => ({
                label: key,
                y: sentimentData[key],
                color: graphColors[key]
            }))
        }],
        legend: {
            itemTextFormatter: (e: { text: string }): string => {
                return `<span style="color:${graphColors[e.text]}">${e.text}</span>`
            }
        },
        height: 300
    }
}

export const getEmptyPieChartOptions = (): any => {
    return {
        title: {
            text: "Sentiment Distribution",
            fontFamily: "Arial",
            fontSize: 20,
            fontWeight: "bold",
        },
        data: [{
            type: "pie",
            dataPoints: [
                {
                    label: "No Data",
                    y: 100,
                    color: "#d3d3d3"
                }
            ],
        }],
        height: 300
    }
}