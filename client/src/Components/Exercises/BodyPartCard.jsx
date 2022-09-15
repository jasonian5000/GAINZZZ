import React from 'react'
import { Stack, Typography } from '@mui/material'
import '../../css/bodyPartCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { searchExercises } from '../../actions/searchExercises_client';
import { resetPages } from '../../actions/pageAction';

const BodyPartCard = ({ bodyPart }) => {
  const dispatch = useDispatch()
  return (
    <Stack
      type="button"
      onClick={() => {
        searchExercises(bodyPart, dispatch);
        resetPages(dispatch)
      }
      }
      alignItems="center"
      justifyContent="center"
      className="bodyPartCard"
      sx={{
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        gap: "47px",
      }}
    >
      <img
        src={require("../../assets/gym.webp")}
        style={{ width: "50px", height: "50" }}
        alt={bodyPart}
      />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
        {bodyPart}
      </Typography>
    </Stack>
  );  
}

export default BodyPartCard