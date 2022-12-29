import { Snackbar } from '@mui/material'
import React from 'react'

export default function Toasts(props) {
    return (
        <>
            <Snackbar
                sx={{
                    '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
                }}
                message="Login Successful! Welcome to Gainzzz!"
                open={props.toasts.pass}
                autoHideDuration={6000}
                onClose={() => {
                    props.toasts.setPass(false)
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            <Snackbar
                sx={{
                    '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
                }}
                message="Account information was updated"
                open={props.toasts.updated}
                autoHideDuration={6000}
                onClose={() => {
                    props.toasts.setUpdated(false)
                    window.history.replaceState({}, document.title)
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
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
                open={props.toasts.loginFailToast}
                autoHideDuration={6000}
                onClose={() => {
                    props.toasts.setLoginFailToast(false)
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </>
    )
}
