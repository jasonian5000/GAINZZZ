import { Box, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PersonalTrainerCard from '../features/trainers/trainer-card.component'
import '../../css/PersonalTrainers.css'
import getTrainerInfo from '../features/trainers/get-trainer-info'

const PersonalTrainers = () => {
    const dispatch = useDispatch()
    const trainers = useSelector(state => state.trainers.trainers)
    useEffect(() => {
        getTrainerInfo(dispatch)
        // eslint-disable-next-line
    }, [])
    return (
        <div className="PersonalTrainerContainer">
            <div className="pt-wrapper">
                <Box
                    sx={{ display: 'grid', flexDirection: 'row' }}
                    mt="50px"
                    p="20px"
                >
                    {trainers.map(trainer => (
                        <Stack key={trainer.id}>
                            <PersonalTrainerCard trainer={trainer} />
                        </Stack>
                    ))}
                </Box>
            </div>
        </div>
    )
}

export default PersonalTrainers
