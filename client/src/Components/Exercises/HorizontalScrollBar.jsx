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

const HorizontalScrollBar = ({ bodyPart, setBodyPart }) => {
  
  const bodyPartList = useSelector((state)=> state.search?.bodyPartList)
  return (
    <ScrollMenu LeftArrow = {LeftArrow} RightArrow={RightArrow}
    className='SCROLL-MENU'>
      {bodyPartList?.map((item) => (
        <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
          <BodyPartCard bodypart={bodyPart} setBodyPart={setBodyPart} item={item} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
