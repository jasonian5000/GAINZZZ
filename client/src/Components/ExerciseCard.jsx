import { useSelector } from "react-redux";
import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../css/exerciseCard.css'

const ExerciseCard = () => {
  const data = useSelector((state) => state.searchResults.searchResults);
  return (
    <div>
      {data?.map((exercise) => (
        <Link key={exercise.id} className="exerciseCard" to={`/exercise/${exercise.id}`}>
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
