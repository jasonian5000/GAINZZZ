import supabase from './supabaseClient'

const userSignOut = async navigate => {
    const { error } = await supabase.auth.signOut()
    navigate('/')
}

export default userSignOut
