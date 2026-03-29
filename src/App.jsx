import React from 'react'
import Signup from './pages/Signup'
import { Routes, Route } from "react-router-dom"
import Onboarding from './pages/Onboarding.jsx'
import FourZeroFour from './pages/Error.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/error" element={<FourZeroFour />} />
      </Routes>
    </div>
  )
}

export default App
