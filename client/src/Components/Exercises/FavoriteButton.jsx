import React, { useState } from 'react'
import { addToFavorites } from '../../actions/supabase_client'
import { markFavorites } from '../../actions/searchExercises_client'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setFavWorkouts } from '../../actions/workoutBuilder'
import { Button } from '@mui/material'


export default function FavoriteButton(prop) {
    const setOpen = prop.setOpen
    const dispatch = useDispatch()
    const favorites = useSelector(
        state => state.favoriteWorkouts.favoriteWorkouts
    )
    const [favList, setFavList] = useState(favorites)
    const isFav = markFavorites(favList, prop?.exercise?.id)
    const [favCheck, setFavCheck] = useState(false)
    useEffect(
        () => {
            setFavWorkouts(dispatch)
        },
        // eslint-disable-next-line
        []
    )
    useEffect(
        () => {
            setFavList(favorites)
            setFavCheck(isFav)
        },
        // eslint-disable-next-line
        [favorites, favCheck]
    )
    return (
        <>
            <Button
                key={isFav}
                className="exerciseCardButton"
                variant="outlined"
                size="small"
                disabled={Boolean(favCheck)}
                onClick={() => {
                    addToFavorites(prop?.exercise?.id)
                    setOpen(true)
                    setFavWorkouts(dispatch)
                    setFavCheck(isFav)
                }}
            >
                {favCheck === true ? (
                    <FavoriteSharpIcon />
                ) : (
                    <FavoriteTwoToneIcon />
                )}
            </Button>
        </>
    )
}
