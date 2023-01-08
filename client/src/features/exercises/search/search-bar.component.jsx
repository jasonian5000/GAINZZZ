import React from 'react'
import { useSearchExercise } from './searchExerciseContext'

export default function SearchBar() {
    const { name, setName, called, error, loading, getExercises } =
        useSearchExercise()
    const handleSubmit = e => {
        e.preventDefault()
        getExercises(name)
        return
    }

    if (called && error) {
        console.log('search exercise error', error)
        return <div>something went wrong</div>
    }
    if (loading) {
        console.log('loading')
        return <div>loading...</div>
    }

    return (
        <div className="searchBar">
            <h1>Search!!!</h1>
            <input
                type="text"
                value={name}
                onChange={e => {
                    setName(e.target.value)
                }}
            />
            <button
                onClick={e => {
                    handleSubmit(e)
                }}
            >
                Search
            </button>
        </div>
    )
}
