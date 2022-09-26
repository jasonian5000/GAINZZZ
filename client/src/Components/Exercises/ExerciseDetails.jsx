import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import '../../css/exerciseDetail.css'
import SearchBar from './SearchBar'
import ExerciseCard from './ExerciseCard'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../actions/pageAction'
import Toasts from '../Toasts'
import { useState } from 'react'
import { useEffect } from 'react'
import { setFavWorkouts } from '../../actions/workoutBuilder'
import { motion } from 'framer-motion'

const ExerciseDetails = () => {
    const dispatch = useDispatch()
    const [addedFavToast, setAddedFavToast] = useState(false)
    let toasts = { addedFavToast, setAddedFavToast }
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
    useEffect(() => {
        setFavWorkouts(dispatch)
    }, [])
    return (
        <motion.div
            className="ED-Wrapper"
            intial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
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
                            <ExerciseCard current={current} toasts={toasts} />
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
            <Toasts toasts={toasts} />
        </motion.div>
    )
}

export default ExerciseDetails
