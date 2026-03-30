import React from 'react'
import Signup from './pages/Signup'
import { Routes, Route } from "react-router-dom"
import Onboarding from './pages/Onboarding.jsx'
import FiveZeroFive from './pages/Error.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/error505" element={<FiveZeroFive />} />
      </Routes>
    </div>
  )
}

export default App
