'use client';

import { motion } from 'framer-motion'

function Animation() {
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >      
        <div>Hola mundo animado!</div>
    </motion.div>
  )
}

export default Animation





