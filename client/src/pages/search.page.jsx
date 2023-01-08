import React from 'react'
import SearchResults from 'features/exercises/search/search-results.component'
import SearchBar from 'features/exercises/search/search-bar.component'
import { SearchExerciseProvider } from 'features/exercises/search/searchExerciseContext'

export default function SearchPage() {
    return (
        <div className="searchWrapper">
            <SearchExerciseProvider>
                <SearchBar />
                <SearchResults />
            </SearchExerciseProvider>
        </div>
    )
}
