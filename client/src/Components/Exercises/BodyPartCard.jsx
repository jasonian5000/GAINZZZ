import React from 'react'
import { Stack, Typography } from '@mui/material'
import '../../css/bodyPartCard.css'
import { useDispatch} from 'react-redux';
import searchExercises from '../../actions/searchExercises';

const BodyPartCard = ({ bodyPart }) => {
  const dispatch = useDispatch()
  return (
    <Stack
      type="button"
      onClick={() => {
        searchExercises(bodyPart, dispatch);
        dispatch({ type: 'RESET_PAGES', payload: 1 })
      }
      }
      alignItems="center"
      justifyContent="center"
      className="bodyPartCard"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        width: "220px",
        height: "200px",
        gap: "47px",
      }}
    >
      <img
        src={require("../../assets/gym.webp")}
        style={{ width: "50px", height: "50px" }}
        alt={bodyPart}
      />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
        {bodyPart}
      </Typography>
    </Stack>
  );  
}

export default BodyPartCard