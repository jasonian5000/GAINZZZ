import React from 'react'
import { useSearchExercise } from './searchExerciseContext'

export default function SearchResults() {
    const { data } = useSearchExercise()
    return (
        <div className="resultsContainer">
            {data?.exercises.exercises.map((exercise, index) => (
                <div key={exercise.id + index} className="exerciseCard">
                    <img src={exercise.gifUrl} alt={exercise.name} />
                    <h2>{exercise.name}</h2>
                </div>
            ))}
        </div>
    )
}
