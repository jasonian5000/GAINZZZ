import { Box, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPersonalTrainers } from '../actions/personalTrainersInformation'
import PersonalTrainerCard from './PersonalTrainerCard'

const PersonalTrainers = () => {
    const dispatch = useDispatch()
    const trainers = useSelector(state => state.trainers.trainers)

    useEffect(() => {
        getPersonalTrainers(dispatch)
    }, [])
    return (
        <div className="PersonalTrainerContainer">
            <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
                {trainers.map(trainer => (
                    <Stack>
                        <PersonalTrainerCard trainer={trainer} key={trainer.id}/>
                    </Stack>
                ))}
            </Box>
        </div>
    )
}

export default PersonalTrainers
