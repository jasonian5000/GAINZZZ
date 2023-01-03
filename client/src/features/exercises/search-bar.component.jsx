import React, { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import searchExercises from './search-exercises'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [searchInput, setSearchInput] = useState('')
    const handleKeyPress = async (e, SearchInput, dispatch) => {
        if (e.key === 'Enter') {
            await searchExercises(SearchInput, dispatch)
            setSearchInput('')
        }
    }
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '40px', xs: '25px' },
                    color: 'whitesmoke',
                }}
                mt="80px"
                mb="50px"
                textAlign="center"
            >
                Search For Exercises by Keyword
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'whitesmoke',
                        },
                        width: { lg: '800px', xs: '350px' },
                        color: 'white',
                        border: '2px solid white',
                        'border-radius': '4px',
                    }}
                    height="76px"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value.toLowerCase())}
                    onKeyPress={e => {
                        handleKeyPress(e, searchInput, dispatch)
                        dispatch({ type: 'RESET_PAGES', payload: 1 })
                    }}
                    placeholder="Deadlift"
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '150px', xs: '12px' },
                        fontSize: { lg: '16px', xs: '12px' },
                        height: '60px',
                        position: 'absolute',
                        right: '0',
                    }}
                    onClick={() => {
                        searchExercises(searchInput, dispatch)
                        dispatch({ type: 'RESET_PAGES', payload: 1 })
                    }}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    )
}

export default SearchBar
