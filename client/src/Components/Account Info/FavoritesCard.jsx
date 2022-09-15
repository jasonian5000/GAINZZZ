import React from 'react'
import { Typography } from '@mui/material'

const UserAccountInformation = (props) => {
  return (
      <div>
          <Typography
              ml="21px"
              color="black"
              fontWeight="bold"
              mt="11px"
              pb="10px"
              textTransform="capitalize"
          >
              {props?.workout?.name}
          </Typography>
          <img src={props?.workout?.gifUrl} alt="" loading="lazy" />
      </div>
  )
}

export default UserAccountInformation