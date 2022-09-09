import React from "react";
import { Box } from "@mui/material";
import BodyPartCard from "./BodyPartCard";
import { useSelector } from 'react-redux';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'

const HorizontalScrollBar = ({bodyPart, setBodyPart}) => {
  const data = useSelector((state)=> state.bodyPart?.bodyPartList)
  return (
    <ScrollMenu>
      HorizontalScrolBar
      {data?.map((item) => (
        <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
          <BodyPartCard bodypart={bodyPart} setBodyPart={setBodyPart} item={item} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
