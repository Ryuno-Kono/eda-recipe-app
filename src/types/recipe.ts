export type Recipe = {
    recipe: {
        uri: string
        label: string
        image: string
        images: {
            THUMBNAIL: {
                url: string
                width: number
                height: number
            }
            SMALL: {
                url: string
                width: number
                height: number
            }
            REGULAR: {
                url: string
                width: number
                height: number
            }
            LARGE: {
                url: string
                width: number
                height: number
            }
        }
        source: string
        url: string
        shareAs: string
        yield: number
        dietLabels: [string]
        healthLabels: [string]
        cautions: [string]
        ingredientLines: [string]
        ingredients: [
            {
                text: string
                quantity: number
                measure: string
                food: string
                weight: number
                foodId: string
            }
        ]
        calories: number
        glycemicIndex: number
        totalCO2Emissions: number
        co2EmissionsClass: 'A+'
        totalWeight: number
        totalTime: number
        cuisineType: [string]
        mealType: [string]
        dishType: [string]
        totalNutrients: {}
        totalDaily: {}
        digest: [
            {
                label: string
                tag: string
                schemaOrgTag: string
                total: number
                hasRDI: true
                daily: number
                unit: string
                sub: {}
            }
        ]
    }
    _links: {
        self: {
            href: string
            title: string
        }
        next: {
            href: string
            title: string
        }
    }
}
