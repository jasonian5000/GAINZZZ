import { ExerciseList } from '../exercise-list.js'

export const resolvers = {
    Query: {
        exercise(_, { id }) {
            const exercise = ExerciseList.filter(result => result.id === id)
            return exercise[0]
        },

        exercises(_, { page, filter }) {
            const shouldApplyFilters = filter !== null
            if (shouldApplyFilters) {
                let bodyPart = ExerciseList.filter(result =>
                    result.bodyPart.toLowerCase().includes(filter?.bodyPart)
                )
                let equipment = ExerciseList.filter(result =>
                    result.equipment.toLowerCase().includes(filter?.equipment)
                )
                let name = ExerciseList.filter(result =>
                    result.name.toLowerCase().includes(filter?.name)
                )
                let target = ExerciseList.filter(result =>
                    result.target.toLowerCase().includes(filter?.target)
                )
                let results = [...bodyPart, ...equipment, ...name, ...target]
                console.log(page)
                console.log(filter)
                console.log(results.length)
                return results.slice(page * 20 - 20, page * 20)
            }
        },
    },
}
