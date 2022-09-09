import { useSelector } from "react-redux";
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = () => {
  const data = useSelector((state) => state.searchResults.searchResults);
  console.log(data);
  return (
    <div>
      {data?.map((exercise) => (
        <Box>
            <p>{exercise.name}</p>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </Box>
      ))}
    </div>
  );
};

export default ExerciseCard;
