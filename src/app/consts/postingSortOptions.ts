export const postSortingOptions = [
    { value: "best", label: "Best" },
    { value: "hot", label: "Hot" },
    { value: "rising", label: "Rising" },
    { value: "new", label: "New" }
]

export type PostSortingOption = typeof postSortingOptions[number]['value']