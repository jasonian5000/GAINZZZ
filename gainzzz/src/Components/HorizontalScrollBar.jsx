import React from 'react'
import { Box } from '@mui/material'
import BodyPartCard from './BodyPartCard'

const HorizontalScrollBar = ({data}) => {
  return (
    <div>HorizontalScrollBar
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m='0 40px'>
          <BodyPartCard item={item}/>
          </Box>
        ))}
    </div>
  )
}

export default HorizontalScrollBar