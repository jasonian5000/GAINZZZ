import { Box, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPersonalTrainers } from '../../actions/personalTrainersInformation'
import PersonalTrainerCard from './PersonalTrainerCard'
import '../../css/PersonalTrainers.css'

const PersonalTrainers = () => {
    const dispatch = useDispatch()
    const trainers = useSelector(state => state.trainers.trainers)
    useEffect(() => {
        getPersonalTrainers(dispatch)
    }, [])
    return (
        <div className="PersonalTrainerContainer">
                <div className='pt-wrapper'>
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
