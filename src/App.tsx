import React from 'react';
import Sectiona from './Sectiona';
import Sectionb from './Sectionb';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Sectiona/>} />
          <Route path="/Sectionb" element={<Sectionb/>} />
          <Route path='*' element={<Sectiona/>} />

        </Routes>
      </Router>
    </>
    
  );
}

export default App;
