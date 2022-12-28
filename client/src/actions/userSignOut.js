const userSignOut = navigate => {
    localStorage.removeItem('supabase.auth.token')
    navigate('/')
}

export default userSignOut