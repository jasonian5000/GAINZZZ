import React from 'react'
import { useDispatch } from 'react-redux';
import { captureAccountInformation } from '../actions/inputs';
import { addAccountInformation } from '../actions/supabase';

const AccountInformation = () => {
const dispatch = useDispatch()
    const sendAccountInformation = async (e) => {
        console.log(e)
        const input = captureAccountInformation(e)
        if (input.height.length < 1) {
            window.alert("Please provide your height")
        } else if (input.gender.length < 1) {
            window.alert("Please provide your gender")
        } else if (input.weight.length < 1) {
            window.alert("Please provide your weight")
        } else {
            let userAccount = await addAccountInformation(
                input.height,
                input.gender,
                input.weight,
                input.bmi,
                input.age,
            )
            console.log(userAccount)
            window.alert("Information added Succesfully")
        }
    }
  return (
    <div>
        <div>
            <h1>Please enter your personal information</h1>
            <div>
                <form>
                    <div>
                        <label htmlFor="height">Height</label>
                        <input type="text" name="height" placeholder='Enter your height' />
                    </div>
                    <div>
                        <label htmlFor="gender">gender</label>
                        <input type="text" name="gender" placeholder='Enter your gender'/>
                    </div>
                    <div>
                        <label htmlFor="weight">weight</label>
                        <input type="text" name="weight" placeholder='Enter your weight'/>
                    </div>
                    <div>
                        <label htmlFor="bmi">bmi. (If you do not know it, leave it blank.)</label>
                        <input type="text" name="bmi" placeholder='Enter your bmi'/>
                        <div>
                            <label htmlFor="age">age</label>
                            <input type="text" name="age" placeholder='Enter your age'/>
                        </div>
                        <div>
                            <label htmlFor="bodyfat%">bodyfat percentage (If you do not know it, leave it blank.)</label>
                            <input type="text" name="bodyfat%" placeholder='Enter your bodyfat%'/>
                        </div>
                        <div>
                            <label htmlFor="totalBurnedCalories">total burned calories. (If you do not know it, leave it blank.)</label>
                            <input type="text" name="totalBurnedCalories" placeholder='Enter your total burned calories'/>
                        </div>
                        <button onClick={(e) => sendAccountInformation(e)}>Submit</button>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AccountInformation