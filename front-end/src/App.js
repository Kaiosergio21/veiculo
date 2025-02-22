
import './App.css';

import React, { useState } from 'react';
import VeiculoList from './components/veiculoList.js';
import VeiculoForm from './components/veiculoForm.js';
import DarkModeToggle from './components/DarkModeToggle.js'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [veiculoParaEditar, setVeiculoParaEditar] = useState(null);
    const[isDarkMode, setIsDarkMode] = useState(false);

    const handleVeiculoAdicionado = () => {
        setVeiculoParaEditar(null);
    };

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark-mode', !isDarkMode);
  };

    return (
      <div className={`container mt-4 ${isDarkMode ? 'dark-mode' : ''}`}>
            <h1>Gerenciamento de Veículos</h1>
         
        
         <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
       
                
               
         
         
            <VeiculoForm
                veiculoParaEditar={veiculoParaEditar}
                onVeiculoAdicionado={handleVeiculoAdicionado}
            />
            <VeiculoList onEdit={setVeiculoParaEditar} />
        </div>
    );
};

export default App;