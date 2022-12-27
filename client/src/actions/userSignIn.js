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
    const sendSession = {
        currentSession: json.session,
        expiresAt: json.session.expires_at,
    }
    localStorage.setItem('supabase.auth.token', JSON.stringify(sendSession))
}

export default userSignIn