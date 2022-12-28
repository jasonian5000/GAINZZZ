import React, { useState } from 'react'
import updateUserFavs from '../../actions/updateUserFavs'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Button } from '@mui/material'
import markFavorites from '../../actions/markFavorites'

export default function FavoriteButton(props) {
    const dispatch = useDispatch()
    let favorites = useSelector(
        state => state.favoriteWorkouts.favoriteWorkouts
    )
    const [favList, setFavList] = useState(favorites)
    const isFav = markFavorites(favList, props?.exercise?.id)
    const [favCheck, setFavCheck] = useState(isFav)
    const [disableToggle, setDisableToggle] = useState(favCheck)
    useEffect(() => {
        setFavList(favorites)
        setFavCheck(isFav)
        setDisableToggle(favCheck)
    }, [favorites, isFav, favCheck])
    return (
        <>
            <Button
                sx={{ color: 'red' }}
                className="exerciseCardButton"
                size="small"
                disabled={Boolean(disableToggle)}
                onClick={() => {
                    updateUserFavs(
                        props.exercise.id,
                        props.toasts.setAddedFavToast,
                        dispatch
                    )
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
