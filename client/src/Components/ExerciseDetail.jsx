import { Box } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import { useState, useEffect } from 'react'
import axios from "axios";
import { useDispatch} from 'react-redux'
import { addBodyParts } from '../actions/bodyPartAction';
import '../css/exerciseDetail.css'
import SearchBar from './SearchBar';
import ExerciseCard from './ExerciseCard';

const ExerciseDetail = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    const getMuscleGroups = async () => {
      const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        headers: {
          "X-RapidAPI-Key": "7555c9e913msh92629e7c5507e7cp1b8026jsna98c340ed373",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          const bodyPartData = response.data;
          addBodyParts(dispatch, bodyPartData);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getMuscleGroups();
  }, []);

  return (
    <div className='ED-Container'>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <SearchBar/>
        <HorizontalScrollBar setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}></Box>
      <ExerciseCard />
      <Box/>
    </div>
  );
};

export default ExerciseDetail