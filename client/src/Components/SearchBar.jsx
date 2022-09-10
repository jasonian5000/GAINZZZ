import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { searchExercises } from "../actions/searchExercises";

const SearchBar = () => {
  const dispatch = useDispatch();
  const exercisesList = useSelector((state) => state.search.exercisesList);
  const [SearchInput, setSearchInput] = useState("");

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "40px", xs: "25px" } }}
        mb="50px"
        textAlign="center"
      >
        {" "}
        Search For Exercises by Keyword
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
          }}
          height="76px"
          value={SearchInput}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          placeholder="Deadlift"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "150px", xs: "12px" },
            fontSize: { lg: "16px", xs: "12px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={() => searchExercises(SearchInput, exercisesList, dispatch)}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchBar;
