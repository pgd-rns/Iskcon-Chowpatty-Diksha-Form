import React from 'react'
import Form from './Components/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './Components/ThankYou';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  </Router>
  )
}

export default App
