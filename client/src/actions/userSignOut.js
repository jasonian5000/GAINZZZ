import supabase from './supabaseClient'

const userSignOut = async navigate => {
    await supabase.auth.signOut()
    navigate('/')
}

export default userSignOut
