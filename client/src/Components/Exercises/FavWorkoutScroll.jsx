import React from 'react'
import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import '../../css/hideScrollBar.css'
import FavoritesCard from './FavoritesCard'
import { Box } from '@mui/system'

const FavWorkoutScroll = () => {
    let favWorkouts = useSelector(
        state => state.favoriteWorkouts.favoriteWorkouts
    )
    return (
        <div className="scroll-container">
            <Box sx={{ width: '75%' }}>
                <ScrollMenu>
                    <div id="favorites-container">
                        {favWorkouts?.map((workout, index) => {
                            return (
                                <Stack key={index + workout.id}>
                                    <FavoritesCard workout={workout} favWorkouts={favWorkouts} />
                                </Stack>
                            )
                        })}
                    </div>
                </ScrollMenu>
            </Box>
        </div>
    )
}

export default FavWorkoutScroll
