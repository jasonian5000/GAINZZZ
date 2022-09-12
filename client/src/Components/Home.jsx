import React from 'react'
import { userSignOut } from '../actions/supabase_client'

const Home = () => {
  return (
    <div>
      <button onClick={() => userSignOut()}>Sign Out</button>
    </div>
  )
}

export default Home