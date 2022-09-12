import { Box, Stack } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { useState } from "react";
import "../css/exerciseDetail.css";
import SearchBar from "./SearchBar";
import ExerciseCard from "./ExerciseCard";

const ExerciseDetails = () => {
  const [bodyPart, setBodyPart] = useState("all");
  return (
      <div className="ED-Container">
          <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
              <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                  <SearchBar bodyPart={bodyPart} />
                  <HorizontalScrollBar
                      setBodyPart={setBodyPart}
                      bodyPart={bodyPart}
                  />
              </Box>
              <Stack>
                  <ExerciseCard/>
              </Stack>
          </Box>
      </div>
  )
};

export default ExerciseDetails;
