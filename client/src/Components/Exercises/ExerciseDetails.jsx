import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import '../../css/exerciseDetail.css'
import SearchBar from './SearchBar'
import ExerciseCard from './ExerciseCard'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../actions/pageAction'
import Snackbar from '@mui/material/Snackbar'
import { useState } from 'react'

const ExerciseDetails = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const currentPage = useSelector(state => state.LoadedPage.Page)
    const perPage = 8
    const searchResults = useSelector(state => state.search?.searchResults)
    const indexOfLast = currentPage * perPage
    const indexOfFirst = indexOfLast - perPage
    const current = searchResults.slice(indexOfFirst, indexOfLast)
    const paginate = (e, value) => {
        setPage(dispatch, value)
        window.scrollTo({ top: 500, behavior: 'smooth' })
    }
    return (
        <div className="ED-Wrapper">
            <div className="ED-Container">
                <Box>
                    <Box
                        sx={{ position: 'relative', width: '100%', p: '20px' }}
                    >
                        <SearchBar />
                        <HorizontalScrollBar />
                    </Box>
                    <div>
                        <Stack>
                            <ExerciseCard current={current} setOpen={setOpen} />
                        </Stack>
                    </div>
                    <Stack mb="0" mt="100px" alignItems="center">
                        {searchResults.length > 8 && (
                            <Pagination
                                shape="rounded"
                                defaultPage={1}
                                count={Math.ceil(
                                    searchResults.length / perPage
                                )}
                                page={currentPage}
                                onChange={paginate}
                                size="large"
                            />
                        )}
                    </Stack>
                </Box>
            </div>
            <Snackbar
            sx={{"& .MuiSnackbarContent-root": { backgroundColor: "green" }}}
                message="Added to Favorites"
                open={open}
                autoHideDuration={3000}
                onClose={() => {
                    setOpen(false)
                }}
                severity="success"
            />
        </div>
    )
}

export default ExerciseDetails
