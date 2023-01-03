const markFavorites = (favorites, workoutID) => {
    let check = ""
    favorites.find(favorite => {
        if (favorite.id === workoutID) {
            check = true
            return true
        } else {
            check = false
            return false
        }
    })
    return check 
}

export default markFavorites
