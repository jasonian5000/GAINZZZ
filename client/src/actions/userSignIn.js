import serverURL from "./serverURL"

const userSignIn = async (email, password) => {
    const body = {
        email,
        password,
    }
    const sessionData = await fetch(`${serverURL}/sign_in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const json = await sessionData.json()
    console.log("json", json)
    const sendSession = {
        currentSession: json.session,
        expiresAt: json.session?.expires_at,
    }
    console.log("sendSession", sendSession)
    if ( sendSession.expiresAt) {
    localStorage.setItem('supabase.auth.token', JSON.stringify(sendSession))}
}

export default userSignIn