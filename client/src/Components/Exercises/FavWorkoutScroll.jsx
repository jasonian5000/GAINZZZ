import React, { useContext } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import '../../css/hideScrollBar.css'
import RightArrowIcon from '../../assets/right-arrow.png'
import LeftArrowIcon from '../../assets/left-arrow.png'
import FavoritesCard from './FavoritesCard'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

const FavWorkoutScroll = () => {
        const favWorkouts = useSelector(
            state => state.favoriteWorkouts.favoriteWorkouts
        )
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            <div id="favorites-container">
                {favWorkouts?.map((workout, index) => {
                    return (
                        <Stack key={index}
                            >
                            <FavoritesCard workout={workout} />
                        </Stack>
                    )
                })}
            </div>
        </ScrollMenu>
    )
}

export default FavWorkoutScroll
