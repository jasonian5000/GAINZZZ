import React from 'react'
import { Stack, Typography } from '@mui/material'
import '../../css/bodyPartCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { searchExercises } from '../../actions/searchExercises_client';
import { resetPages } from '../../actions/pageAction';

const BodyPartCard = ({ bodyPart, item }) => {
  const dispatch = useDispatch()
  return (
    <Stack
      type="button"
      onClick={() => {
        searchExercises(item, dispatch);
        resetPages(dispatch)
      }
      }
      alignItems="center"
      justifyContent="center"
      className="bodyPartCard"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
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
        alt={item}
      />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );  
}

export default BodyPartCard