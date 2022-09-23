import React, {useContext} from "react";
import { Box, Typography } from "@mui/material";
import BodyPartCard from "./BodyPartCard";
import { useSelector } from 'react-redux';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import '../../css/hideScrollBar.css'
import RightArrowIcon from "../../assets/right-arrow.png";
import LeftArrowIcon from "../../assets/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = () => {
  
  const bodyPartList = useSelector((state)=> state.search?.bodyPartList)
  return (
    <div className="scroll-container">
      <Box sx={{width:'75%'}}>
          <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
          >
              {bodyPartList?.map(bodyPart => (
                  <Box key={bodyPart.id} m="0 40px">
                      <BodyPartCard bodyPart={bodyPart} />
                  </Box>
              ))}
          </ScrollMenu>
      </Box>
      </div>
  )
};

export default HorizontalScrollBar;
