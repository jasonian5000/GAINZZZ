import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrainers, sendAccountInformation } from "../actions/accountInformation";

const AccountInformation = () => {
  const dispatch = useDispatch();
  const trainerDropDownList = useSelector((state) => state.trainers.trainerDropDownList);
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(
    () => {
      getTrainers(dispatch);
    },
    // eslint-disable-next-line
    []
  );

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
                className="height"
                placeholder="Enter your height"
              />
            </div>
            <div>
              <label htmlFor="gender">gender</label>
              <input
                type="text"
                className="gender"
                placeholder="Enter your gender"
              />
            </div>
            <div>
              <label htmlFor="weight">weight</label>
              <input
                type="text"
                className="weight"
                placeholder="Enter your weight"
              />
            </div>
            <div>
              <label htmlFor="bmi">
                bmi. (If you do not know it, leave it blank.)
              </label>
              <input type="text" className="bmi" placeholder="Enter your bmi" />
              <div>
                <label htmlFor="age">age</label>
                <input type="text" className="age" placeholder="Enter your age" />
              </div>
              <div>
                <label htmlFor="bodyfat">
                  bodyfat percentage (If you do not know it, leave it blank.)
                </label>
                <input
                  type="text"
                  className="bodyfat"
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
                  className="totalBurnedCalories"
                  placeholder="Enter your total burned calories"
                />
              </div>
              <div>
                <label htmlFor="personalTrainer">
                  select personal trainer
                  <select value={value} onChange={handleChange}>
                    {trainerDropDownList.map((trainer) => (
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
