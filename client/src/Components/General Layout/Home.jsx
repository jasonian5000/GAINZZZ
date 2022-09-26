import React from 'react'
import Feature from './Feature'
import Title from './Title'
import {motion } from 'framer-motion'
const Home = () => {
  
  return (
    <motion.div
      intial={{opacity: 0} }
      animate={{opacity:1}}
      exit={{opacity:0}}
      className="home">
          <Title />
          <Feature />
      </motion.div>
  )
}

export default Home
