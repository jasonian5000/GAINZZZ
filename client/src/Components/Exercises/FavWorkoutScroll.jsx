import React from 'react'

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
                                <FavoritesCard
                                    key={workout.id + index}
                                    workout={workout}
                                    favWorkouts={favWorkouts}
                                />
                            )
                        })}
                    </div>
                </ScrollMenu>
            </Box>
        </div>
    )
}

export default FavWorkoutScroll
