import express from 'express'
import cors from 'cors'
const app = express()
import {
    userSignUp,
    getTrainerInfo,
    userSignIn,
    getUserFavorites,
    addToFavorites,
    getAcctInfo,
    updateAcctInfo,
    deleteUserData,
} from './supabase_server.js'
import { searchExercises } from './searchExercises_server.js'

const PORT = process.env.PORT || 3001

app.use(
    cors({ origin: 'http://localhost:3000', methods: 'GET,POST,PUT,DELETE' })
)
app.use(express.json())

app.post('/search', async (req, res) => {
    const { searchInput } = req.body
    try {
        let searchResults = searchExercises(searchInput)
        res.status(200).send(searchResults)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/sign_up', async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body
    console.log('Req.body', req.body)
    try {
        await userSignUp(firstName, lastName, username, email, password)
        res.send('account created')
    } catch (error) {
        console.log(error)
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
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/acct_info', async (req, res) => {
    const { userID, access_token } = req.body
    try {
        let accountInfo = await getAcctInfo(userID, access_token)
        console.log(accountInfo)
        res.status(200).send(accountInfo)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/update_acct_info', async (req, res) => {
    const { updatedInfo, userID, access_token } = req.body
    try {
        await updateAcctInfo(updatedInfo, userID, access_token)
        console.log('account updated')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

// app.post('/delete_acct', async (req, res) => {
//     const { userID } = req.body
//     try {
//         await deleteUserData(userID)
//         res.status(200)
//     } catch (error) {
//         console.log(error)
//         res.status(400).send(error)
//     }
// })

app.post('/get_favorites', async (req, res) => {
    const { userID, access_token } = req.body
    try {
        const favoritesIdList = await getUserFavorites(userID, access_token)
        res.status(200).send(favoritesIdList)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/add_favorite', async (req, res) => {
    const { userID, workoutID, access_token } = req.body
    try {
        await addToFavorites(userID, workoutID, access_token)
        res.status(200).send('added to favorites')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
