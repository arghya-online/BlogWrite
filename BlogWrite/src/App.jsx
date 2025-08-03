import React, { useState } from 'react'
import './App.css'

function App() {
  console.log("AppWrite URL:", import.meta.env.REACT_APP_APPWRITE_URL);
  return (
    <h1 className='text-3xl font-bold bg-neutral-900 text-center text-white p-6 hover:text-teal-500 hover:translate-x-1 transition-transform'>BlogWrite using AppWrite</h1>

  )
}

export default App
