import React from 'react'

export default function SearchResults(props) {
    return (
        <div className="resultsContainer">
            {props.data?.exercises.map((exercise, index) => (
                <div key={exercise.id + index} className="exerciseCard">
                    <img
                        src={exercise.gifUrl}
                        alt={exercise.name}
                        loading="lazy"
                    />
                    <h2>{exercise.name}</h2>
                </div>
            ))}
        </div>
    )
}
