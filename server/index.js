import express from 'express'
import cors from 'cors'
const app = express()
import {
    userSignUp,
    trainerDropDown,
    addAccountInformation,
    userSignIn,
    getUserFavorites,
    addToFavorites,
    getAcctInfo,
    updateAcctInfo,
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
        console.log(searchResults)
        res.status(200).send(searchResults)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/sign_up', async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body
    try {
        await userSignUp(firstName, lastName, username, email, password)
        res.send("account created")
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

app.get('/trainer_dropdown', async (req, res) => {
    try {
        let ptTable = await trainerDropDown()
        res.status(200).send(ptTable)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/acct_info', async (req, res) => {
    const { userID } = req.body
    console.log("this is userID", userID)
    try {
        let accountInfo = await getAcctInfo(userID)
        res.status(200).send(accountInfo)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/add_acct_info', async (req, res) => {
    const {
        height,
        gender,
        weight,
        bmi,
        age,
        bodyFat,
        totalBurnedCalories,
        personalTrainer,
        userID,
    } = req.body
    try {
        addAccountInformation(
            height,
            gender,
            weight,
            bmi,
            age,
            bodyFat,
            totalBurnedCalories,
            personalTrainer,
            userID
        )
        console.log('account updated')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/update_acct_info', async (req, res) => {
    const {
        height,
        gender,
        weight,
        bmi,
        age,
        bodyFat,
        totalBurnedCalories,
        personalTrainer,
        userID,
    } = req.body
    try {
        updateAcctInfo(
            height,
            gender,
            weight,
            bmi,
            age,
            bodyFat,
            totalBurnedCalories,
            personalTrainer,
            userID
        )
        console.log('account updated')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/user_favorites', async (req, res) => {
    const { userID } = req.body
    try {
        const favoritesIdList = await getUserFavorites(userID)
        res.status(200).send(favoritesIdList)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/add_favorite', async (req, res) => {
    const { userID, workoutID } = req.body
    try {
        await addToFavorites(userID, workoutID)
        res.status(200).send("added to favorites")
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
