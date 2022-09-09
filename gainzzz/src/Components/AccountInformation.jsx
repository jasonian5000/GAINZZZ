import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { captureAccountInformation } from "../actions/inputs";
import { addAccountInformation, ptDropDown } from "../actions/supabase";

const AccountInformation = () => {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => state.pt.ptNameIdList);
  const getTrainers = async () => {
    const trainerData = await ptDropDown();
    dispatch({ type: "SET_PT_NAME_ID_LIST", payload: trainerData });
  };
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const sendAccountInformation = async (e) => {
    console.log(e);
    const input = captureAccountInformation(e);
    console.log("this is input variable", input)
    if (input.height.length < 1) {
      window.alert("Please provide your height");
    } else if (input.gender.length < 1) {
      window.alert("Please provide your gender");
    } else if (input.weight.length < 1) {
      window.alert("Please provide your weight");
    } else {
      let userAccount = await addAccountInformation(
        input?.height,
        input?.gender,
        input?.weight,
        input?.bmi,
        input?.age,
        input?.bodyFat,
        input?.totalBurnedCalories,
        input.personalTrainer
      );
      console.log(userAccount);
      window.alert("Information added Succesfully");
    }
  };

  useEffect(
    () => {
      getTrainers();
    },
    // eslint-disable-next-line
    []
  );

  console.log(trainers);

return (
    <div>
        <div>
        <h1>Please enter your personal information</h1>
        <div>
            <form>
            <div>
                <label htmlFor="height">Height</label>
                <input
                type="text"
                name="height"
                placeholder="Enter your height"
                />
            </div>
            <div>
                <label htmlFor="gender">gender</label>
                <input
                type="text"
                name="gender"
                placeholder="Enter your gender"
                />
            </div>
            <div>
                <label htmlFor="weight">weight</label>
                <input
                type="text"
                name="weight"
                placeholder="Enter your weight"
                />
            </div>
            <div>
                <label htmlFor="bmi">
                bmi. (If you do not know it, leave it blank.)
                </label>
                <input type="text" name="bmi" placeholder="Enter your bmi" />
                <div>
                <label htmlFor="age">age</label>
                <input type="text" name="age" placeholder="Enter your age" />
                </div>
                <div>
                <label htmlFor="bodyfat">
                    bodyfat percentage (If you do not know it, leave it blank.)
                </label>
                <input
                    type="text"
                    name="bodyfat"
                    placeholder="Enter your bodyfat percent"
                />
              </div>
              <div>
                <label htmlFor="totalBurnedCalories">
                  total burned calories. (If you do not know it, leave it
                  blank.)
                </label>
                <input
                  type="text"
                  name="totalBurnedCalories"
                  placeholder="Enter your total burned calories"
                />
              </div>
              <div>
                <label htmlFor="personalTrainer">
                  select personal trainer
                  <select value={value} onChange={handleChange}>
                    {trainers.map((trainer) => (
                        <option key={trainer.id} value={trainer.id}>
                            {trainer.ptName}
                        </option>
                    ))}
                    </select>
                </label>
                </div>
                <button onClick={(e) => sendAccountInformation(e)}>Submit</button>
                <button>Update</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  );
};

export default AccountInformation;
