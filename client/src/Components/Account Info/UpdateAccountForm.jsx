import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmDeleteAccount, getTrainers, sendAcctInfo } from '../../actions/accountInformation'
import '../../css/accountInformation.css'

export default function UpdateAccountForm() { 
    const makeNumberArray = (start, finish) => {
        let state = Array(finish - start).fill({})
        return state.map((part, index) => ({
            value: String(start + index),
        }))
    }
    const heightList = makeNumberArray(36, 91)
    const weightList = makeNumberArray(50, 500)
    const ageList = makeNumberArray(16, 100)
    const dispatch = useDispatch()
    const trainerDropDownList = useSelector(
        state => state.trainers.trainerDropDownList
    )
    const info = useSelector(state => state.personalInfo.accountInfo)
    const [heightValue, setHeightValue] = useState()
    const [weightValue, setWeightValue] = useState()
    const [genderValue, setGenderValue] = useState()
    const [ageValue, setAgeValue] = useState()
    const [trainerValue, setTrainerValue] = useState()
    useEffect(
        () => {
            getTrainers(dispatch)
        },
        // eslint-disable-next-line
        []
    )
  return (
      <div className="accountInformationForm">
          <div className="formWrapper">
              <h1 className="title">Update Account</h1>
              <form className="formContainer">
                  <div className="height">
                      <label htmlFor="height">Height:</label>
                      <select
                          value={heightValue}
                          onChange={e => {
                              setHeightValue(e.target.value)
                          }}
                      >
                          <option value="">select..</option>
                          {heightList.map(height => (
                              <option key={height.value} value={height.value}>
                                  {height.value}
                              </option>
                          ))}
                      </select>
                  </div>
                  <div className="weight">
                      <label htmlFor="weight">Weight:</label>
                      <select
                          value={weightValue}
                          onChange={e => {
                              setWeightValue(e.target.value)
                          }}
                      >
                          <option value="">select..</option>
                          {weightList.map(weight => (
                              <option key={weight.value} value={weight.value}>
                                  {weight.value}
                              </option>
                          ))}
                      </select>
                  </div>
                  <div className="gender">
                      <label htmlFor="gender">Gender:</label>
                      <select
                          value={genderValue}
                          onChange={e => {
                              setGenderValue(e.target.value)
                          }}
                      >
                          <option value="">select..</option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                          <option value="prefer not to say">
                              prefer not to say
                          </option>
                      </select>
                  </div>
                  <div className="age">
                      <label htmlFor="age">Age:</label>
                      <select
                          value={ageValue}
                          onChange={e => {
                              setAgeValue(e.target.value)
                          }}
                      >
                          <option value="">select..</option>
                          {ageList.map(age => (
                              <option key={age.value} value={age.value}>
                                  {age.value}
                              </option>
                          ))}
                      </select>
                  </div>
                  <div className="trainers">
                      <label htmlFor="personalTrainer">Personal Trainer:</label>
                      <select
                          value={trainerValue}
                          onChange={e => {
                              setTrainerValue(e.target.value)
                          }}
                      >
                          <option value="">No trainer</option>
                          {trainerDropDownList.map(trainer => (
                              <option key={trainer.id} value={trainer.id}>
                                  {trainer?.ptName}
                              </option>
                          ))}
                      </select>
                  </div>
                  <div className="buttons">
                      <button
                          className="btn btn-5"
                          onClick={e => sendAcctInfo(e, info)}
                      >
                          Update
                      </button>
                      <button
                          className="btn btn-5"
                          onClick={() => confirmDeleteAccount()}
                      >
                          Delete Account
                      </button>
                  </div>
              </form>
          </div>
      </div>
  )
}
