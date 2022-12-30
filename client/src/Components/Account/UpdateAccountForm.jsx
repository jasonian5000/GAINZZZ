import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import deleteUserAcct from '../../actions/deleteUserAcct'
import getTrainerInfo from '../../actions/getTrainerInfo'
import updateAcctInfo from '../../actions/updateAcctInfo'
import '../../css/accountInformation.css'

export default function UpdateAccountForm(props) {
    const setUpdated = props.setUpdated
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const makeNumberArray = (start, finish) => {
        let state = Array(finish - start).fill({})
        return state.map((part, index) => ({
            value: String(start + index),
        }))
    }
    const inchesToFeet = value => {
        value = Number(value)
        let feet = Math.floor(value / 12)
        let inches = value % 12
        return `${feet}' ${inches}"`
    }

    const heightList = makeNumberArray(36, 91)
    const weightList = makeNumberArray(50, 500)
    const ageList = makeNumberArray(16, 100)
    const trainerDropDownList = useSelector(
        state => state.trainers.trainers
    )
    const info = useSelector(state => state.acctInfo.acctInfo)
    const [heightValue, setHeightValue] = useState('')
    const [weightValue, setWeightValue] = useState('')
    const [genderValue, setGenderValue] = useState('')
    const [ageValue, setAgeValue] = useState('')
    const [trainerValue, setTrainerValue] = useState('')
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [password, setPassword] = useState('')

    useEffect(() => {
        getTrainerInfo(dispatch)
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="acctUpdateForm">
                <div className="updateFormWrapper">
                    <h1>Update Account</h1>
                    <form className="updateFormContainer">
                        <div className="updateSelect">
                            <label htmlFor="height">Height:</label>
                            <Box className="inputSelect" width="250px">
                                <TextField
                                    label="Height"
                                    select
                                    value={heightValue}
                                    onChange={e =>
                                        setHeightValue(e.target.value)
                                    }
                                    fullWidth
                                >
                                    {heightList.map(height => (
                                        <MenuItem
                                            key={height.value}
                                            value={height.value}
                                        >
                                            {inchesToFeet(height?.value)}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </div>
                        <div className="updateSelect">
                            <label htmlFor="weight">Weight:</label>
                            <Box className="inputSelect" width="250px">
                                <TextField
                                    label="Weight"
                                    select
                                    value={weightValue}
                                    onChange={e =>
                                        setWeightValue(e.target.value)
                                    }
                                    fullWidth
                                >
                                    {weightList.map(weight => (
                                        <MenuItem
                                            key={weight.value}
                                            value={weight.value}
                                        >
                                            {weight?.value} pounds
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </div>
                        <div className="updateSelect">
                            <label htmlFor="age">Age:</label>
                            <Box className="inputSelect" width="250px">
                                <TextField
                                    label="Age"
                                    select
                                    value={ageValue}
                                    onChange={e => setAgeValue(e.target.value)}
                                    fullWidth
                                >
                                    {ageList.map(age => (
                                        <MenuItem
                                            key={age.value}
                                            value={age.value}
                                        >
                                            {age?.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </div>
                        <div className="updateSelect">
                            <label htmlFor="gender">Gender:</label>
                            <Box className="inputSelect" width="250px">
                                <TextField
                                    label="Gender"
                                    select
                                    value={genderValue}
                                    onChange={e =>
                                        setGenderValue(e.target.value)
                                    }
                                    fullWidth
                                >
                                    <MenuItem value="male">male </MenuItem>
                                    <MenuItem value="female">female </MenuItem>
                                    <MenuItem value="prefer not to answer">
                                        prefer not to answer
                                    </MenuItem>
                                </TextField>
                            </Box>
                        </div>
                        <div className="updateSelect">
                            <label htmlFor="personalTrainer">
                                Personal Trainer:
                            </label>
                            <Box className="inputSelect" width="250px">
                                <TextField
                                    label="Optional"
                                    select
                                    value={trainerValue}
                                    onChange={e =>
                                        setTrainerValue(e.target.value)
                                    }
                                    fullWidth
                                >
                                    {trainerDropDownList?.map(trainer => (
                                        <MenuItem
                                            key={trainer.id}
                                            value={trainer.id}
                                        >
                                            {trainer?.ptName}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </div>
                        <div className="buttons">
                            <button
                                className="updateButton"
                                onClick={e => {
                                    updateAcctInfo(e, info, dispatch)
                                    setUpdated(true)
                                    setTimeout(() => window.location.reload(), 200)
                                }}
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
                <button
                    className="deleteButton"
                    onClick={() => setConfirmDelete(!confirmDelete)}
                >
                    Delete Account
                </button>
                {confirmDelete && (
                    <div className="confirmDeleteBox">
                        <p className="warningMessage">
                            Warning! Deleting your account information is
                            irreversible. Enter your password to continue.
                        </p>
                        <div className="confirmInputWrapper">
                            <input
                                className="confirmDeleteInput"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder="Enter password..."
                            />
                            <button
                                className="confirmButton"
                                onClick={() => {
                                    deleteUserAcct(password, navigate)
                                }}
                            >
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
