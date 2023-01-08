import { gql, useLazyQuery } from '@apollo/client'
import { createContext, useContext, useState } from 'react'

const SEARCH_EXERCISES = gql`
    query Exercises($page: Int, $filter: FilterExercise) {
        exercises(page: $page, filter: $filter) {
            exercises {
                id
                name
                gifUrl
            }
            totalResults
        }
    }
`

const SearchExerciseContext = createContext(null)

export function SearchExerciseProvider({ children }) {
    const [name, setName] = useState('')
    const [searchExercises, { error, called, loading, data }] = useLazyQuery(
        SEARCH_EXERCISES,
        {
            variables: {
                page: 1,
                filter: {
                    name: name,
                },
            },
        }
    )

    const getExercises = async (name) => {
        const { error, called, loading, data } = await searchExercises(name)
        console.log(data)
        return { error, called, loading, data }
    }

    return (
        <SearchExerciseContext.Provider
            value={{
                name,
                setName,
                getExercises,
                error,
                called,
                loading,
                data,
            }}
        >
            {children}
        </SearchExerciseContext.Provider>
    )
}

export const useSearchExercise = () => useContext(SearchExerciseContext)
