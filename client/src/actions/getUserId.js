const getUserId = async () => {
    let local = localStorage.getItem('supabase.auth.token')
    const parsed = JSON.parse(local)
    const userID = await parsed.currentSession.user.id
    return await userID
}

export default getUserId