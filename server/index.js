import express from 'express'
import cors from 'cors'
const app = express()
import {
    userSignUp,
    getTrainerInfo,
    userSignIn,
    getAcctInfo,
    updateAcctInfo,
} from './util/supabase_server.js'
import {
    getUserFavorites,
    addToFavorites,
    removeFavorite,
} from './util/favorites.js'
import { searchExercises } from './util/searchExercises.js'
import { destroyAllUserData } from './util/destroyUser.js'
import { getTrackedWeight } from './util/trackedWeight.js'
import {
    getWorkoutsCompleted,
    updateWorkoutsCompleted,
} from './util/workoutsCompleted.js'

const PORT = process.env.PORT || 3001

app.use(cors({ origin: '*', methods: 'GET,POST,PUT,DELETE' }))
app.use(express.json())

app.post('/search', async (req, res) => {
    const { searchInput } = req.body
    try {
        let searchResults = searchExercises(searchInput)
        res.status(200).send(searchResults)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/sign_up', async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body
    try {
        await userSignUp(firstName, lastName, username, email, password)
        res.send('account created')
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/sign_in', async (req, res) => {
    const { email, password } = req.body
    try {
        const sessionData = await userSignIn(email, password)
        res.status(200).send(sessionData)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/trainer_info', async (req, res) => {
    try {
        let ptTable = await getTrainerInfo()
        res.status(200).send(ptTable)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/acct_info', async (req, res) => {
    const { userID, access_token } = req.body
    try {
        let accountInfo = await getAcctInfo(userID, access_token)
        res.status(200).send(accountInfo)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/update_acct_info', async (req, res) => {
    const { updatedInfo, userID, access_token } = req.body
    try {
        await updateAcctInfo(updatedInfo, userID, access_token)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/delete_acct', async (req, res) => {
    const { userID, access_token, password } = req.body
    try {
        await destroyAllUserData(userID, access_token, password)
        res.status(200).send('delete account successful')
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/get_favorites', async (req, res) => {
    const { userID, access_token } = req.body
    try {
        const favoritesIdList = await getUserFavorites(userID, access_token)
        res.status(200).send(favoritesIdList)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/add_favorite', async (req, res) => {
    const { userID, workoutID, access_token } = req.body
    try {
        await addToFavorites(userID, workoutID, access_token)
        res.status(200).send('added to favorites')
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/remove_favorite', async (req, res) => {
    const { userID, workoutID, access_token } = req.body
    try {
        await removeFavorite(userID, workoutID, access_token)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/get_tracked_weight', async (req, res) => {
    const { userID, access_token } = req.body
    try {
        let weightData = await getTrackedWeight(userID, access_token)
        res.status(200).send(weightData)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/get_workouts_completed', async (req, res) => {
    const { userID, access_token } = req.body
    try {
        let completed = await getWorkoutsCompleted(userID, access_token)
        res.status(200).send(completed)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/update_workouts_completed', async (req, res) => {
    const { workoutsCompleted, userID, access_token } = req.body
    try {
        await updateWorkoutsCompleted(workoutsCompleted, userID, access_token)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
