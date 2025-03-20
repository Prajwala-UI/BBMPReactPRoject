// src/App.js
import React from 'react';
import AppRoutes from './Routes';
import './localization/i18n';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
