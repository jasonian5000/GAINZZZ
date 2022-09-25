import { Snackbar } from '@mui/material'
import React from 'react'

export default function Toasts(props) {
  return (
      <>
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
          <Snackbar
              sx={{
                  '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
              }}
              message="Added to Workout"
              open={Boolean(props.toasts.addWorkoutToast)}
              autoHideDuration={6000}
              onClose={() => {
                  props.toasts.setAddWorkoutToast(false)
              }}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          />
          <Snackbar
              sx={{
                  '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
              }}
              message="Added to Favorites"
              open={props.toasts.addedFavToast}
              autoHideDuration={3000}
              onClose={() => {
                  props.toasts.setAddedFavToast(false)
              }}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          />
          <Snackbar
              sx={{
                  '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
              }}
              message="Please confirm your email to sign in"
              open={props.toasts.confirmEmailToast}
              autoHideDuration={3000}
              onClose={() => {
                  props.toasts.setConfirmEmailToast(false)
              }}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          />
          <Snackbar
              sx={{
                  '& .MuiSnackbarContent-root': { backgroundColor: 'red' },
              }}
              message="Please fill out all fields to register"
              open={props.toasts.needMoreToast}
              autoHideDuration={3000}
              onClose={() => {
                  props.toasts.setNeedMoreToast(false)
              }}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          />
          <Snackbar
              sx={{
                  '& .MuiSnackbarContent-root': { backgroundColor: 'red' },
              }}
              message="Login Failed. Check your email and password."
              open={props.toasts.fail}
              autoHideDuration={6000}
              onClose={() => {
                  props.toasts.setFail(false)
              }}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          />
      </>
  )
}