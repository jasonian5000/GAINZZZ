import supabase from './supabase'

const checkSession = async () => {
    const {
        data: { session },
    } = await supabase.auth.getSession()
    console.log(session)
    if (session) {
        return false
    } else {
        return true
    }
}

export default checkSession
