import React from 'react'
import Form from './Components/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './Components/ThankYou';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
