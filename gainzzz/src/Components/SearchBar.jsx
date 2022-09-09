import React from 'react'
import { useEffect, useState } from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { listWorkoutsByTargetMuscle } from '../actions/supabase'
import { useDispatch, useSelector } from 'react-redux'

const SearchBar = () => {
    let newSearchResults = useSelector(state => state.searchResults.searchResults)
    const [Search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handleSearch = async() => {
        if (Search) {
            newSearchResults = await listWorkoutsByTargetMuscle(dispatch, Search)
            
        }
    }

    return (
      <Stack alignItems='center' mt='37px' justifyContent='center' p='20px' >
            <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '25px' } }} mb='50px' textAlign='center'> Search For Exercises by Keyword</Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: {lg: '800px', xs:'350px'}
                    }}
                    height='76px'
                    value={Search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Dead Lift'
                    type='text'
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor:'#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '150px', xs: '12px' },
                        fontSize: { lg: '16px', xs: '12px' },
                        height: '56px',
                        position: 'absolute',
                        right:'0'
                    }}
                onClick={handleSearch}>
                Search
                </Button>
                    
            </Box>
      </Stack>
  )
}

export default SearchBar