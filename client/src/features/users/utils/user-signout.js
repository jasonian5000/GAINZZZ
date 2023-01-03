import supabase from "features/ui/supabase"

const userSignOut = async navigate => {
    await supabase.auth.signOut()
    navigate('/')
}

export default userSignOut
