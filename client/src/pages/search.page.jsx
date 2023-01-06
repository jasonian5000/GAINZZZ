import { gql, useLazyQuery } from '@apollo/client'
import SearchResults from 'features/exercises/search-results.component'
import React, { useState } from 'react'

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

export default function SearchPage() {
    const [name, setName] = useState('')
    const [getExercises, { error, called, loading, data }] = useLazyQuery(
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
    const handleSubmit = (e) => {
        e.preventDefault()
        getExercises(name)
        console.log(data)
        return
    }

    if (called && error) {
        console.log(error)
        return <div>something went wrong</div>
    }
    if (loading) return <div>loading...</div>
    return (
        <div>
            <h1>Search!!!</h1>
            <input
                type="text"
                value={name}
                onChange={e => {
                    setName(e.target.value)
                }}
            />
            <button
                onClick={(e) => {
                    handleSubmit(e)
                }}
            >
                Search
            </button>
            <SearchResults data={data?.exercises} />
        </div>
    )
}
