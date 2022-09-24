import { Snackbar } from '@mui/material'
import React from 'react'

export default function Toasts(props) {
  return (
      <Snackbar
          sx={{
              '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
          }}
          message="Removed from Favorites"
          open={Boolean(props.toasts.removeFavToast)}
          autoHideDuration={6000}
          onClose={() => {
              props.toasts.setRemoveFavToast(false)
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
  )
}