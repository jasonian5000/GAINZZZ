import { Box, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPersonalTrainers } from '../../actions/personalTrainersInformation'
import PersonalTrainerCard from './PersonalTrainerCard'
import "../../css/PersonalTrainers.css"

const PersonalTrainers = () => {
    const dispatch = useDispatch()
    const trainers = useSelector(state => state.trainers.trainers)
    console.log(trainers)

    useEffect(() => {
        getPersonalTrainers(dispatch)
    }, [dispatch])
    return (
        <div className="PersonalTrainerContainer">
            <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
                {trainers.map((trainer) => (
                    <Stack key={trainer.id}>
                        <PersonalTrainerCard trainer={trainer} />
                    </Stack>
                ))}
            </Box>
        </div>
    )
}

export default PersonalTrainers
