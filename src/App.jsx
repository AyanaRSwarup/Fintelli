import React from 'react'
import Signup from './pages/Signup'
import { Routes, Route } from "react-router-dom"
import Onboarding from './pages/Onboarding.jsx'
import FiveZeroFive from './pages/Error.jsx'
import ProtectedRoute from './context/ProfileContext.jsx'
import SideBar from './components/SideBar.jsx'
import Debt from './pages/Debt.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/onboarding" element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          } />
        <Route element={<SideBar />}> 
          <Route path="/debts" element={<Debt />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/error505" element={<FiveZeroFive />} />
      </Routes>
    </div>
  )
}

export default App
