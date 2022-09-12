import express from 'express'
import cors from 'cors'
const app = express()
import {
    userSignUp,
    sendSupabase,
    trainerDropDown,
    addAccountInformation,
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

app.get('/get_keys', async (req, res) => {
    const result = sendSupabase()
    try {
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.post('/sign_up', async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body
    try {
        userSignUp(firstName, lastName, username, email, password)
        res.send('new user created')
    } catch (error) {
        console.log(error)
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
        access_token,
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
            access_token
        )
        console.log('account updated')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
