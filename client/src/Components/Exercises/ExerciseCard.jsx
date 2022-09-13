import { useSelector } from "react-redux";
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../../css/exerciseCard.css'
import { addToFavorites } from "../../actions/addToFavorites";

const ExerciseCard = () => {
  const searchResults = useSelector((state) => state.search?.searchResults);
  return (
    <div className="cardContainer">
      {searchResults?.map((exercise, index) => (
     <Link key={index} className="exerciseCard" to={`/exercise/${exercise.id}`}>   
          <Typography ml="21px" color="black" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize">
            {exercise.name}
          </Typography>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          <Stack>
            <Button onclick={() =>{addToFavorites()}}>Add to Workout</Button>
          </Stack>
        </Link>
      ))}
    </div>
  );
};

export default ExerciseCard;
