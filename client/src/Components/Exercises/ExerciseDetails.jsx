import { Box, Pagination, Stack } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { useState } from "react";
import "../../css/exerciseDetail.css";
import SearchBar from "./SearchBar";
import ExerciseCard from "./ExerciseCard";
import { useSelector } from "react-redux"; 

const ExerciseDetails = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 9;
    const paginte = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({top:500, behavior: 'smooth'})
    }
    const searchResults = useSelector(state => state.search?.searchResults)
    const indexOfLast = currentPage * perPage
    const indexOfFirst = indexOfLast - perPage
    const current = searchResults.slice(indexOfFirst, indexOfLast)
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
                  <ExerciseCard current={current} />
              </Stack>
              <Stack mb='0'mt='100px' alignItems='center'>
                  {searchResults.length > 9 && (
                      <Pagination
                          color='standard'
                          shape="rounded"
                          defaultPage={1}
                          count={Math.ceil(searchResults.length / perPage)}
                          page={currentPage}
                          onChange={paginte}
                          size='large'
                      />
                  )}
              </Stack>
          </Box>
      </div>
  )
};

export default ExerciseDetails;
