import { useSelector } from "react-redux";
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../css/exerciseCard.css'

const ExerciseCard = () => {
  const data = useSelector((state) => state.searchResults.searchResults);
  console.log(data);
  return (
    <div>
      {data?.map((exercise) => (
        <Link className="exerciseCard" to={`/exercise/${exercise.id}`}>
          <Typography ml="21px" color="black" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize">
            {exercise.name}
          </Typography>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </Link>
      ))}
    </div>
  );
};

export default ExerciseCard;
