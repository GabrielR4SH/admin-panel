import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './HOC/PrivateRoute';
import Login from './components/Login/Login';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute component={AdminPanel} />} />
      </Routes>
    </Router>
  );
}

export default App;
