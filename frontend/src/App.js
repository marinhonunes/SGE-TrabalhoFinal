import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ComponenteMenu from "./COMPONENTES/MENU/ComponenteMenu";
import CadastroResponsavel from "./COMPONENTES/MARIANE/CadastroResponsavel"
import ComponenteTabela from './COMPONENTES/FELIPE/ComponenteDeClasseTabela'
import FormFuncionario from './COMPONENTES/MARIO/CadastroFuncionario';

import './App.css';

function App() {
  const [isMenuExpanded, setMenuExpanded] = useState(false);

  return (
    <BrowserRouter>

      <ComponenteMenu isMenuExpanded={isMenuExpanded} setMenuExpanded={setMenuExpanded} />

      <Routes>
        
      <Route
          path="/cadastroFuncionarios"
          element={
            <FormFuncionario isMenuExpanded={isMenuExpanded}></FormFuncionario>
          }
        />

        <Route path="/cadastroResponsavel" element={<CadastroResponsavel isMenuExpanded={isMenuExpanded} />}/>
  
    
          <Route path='/cadastroAlunos' element={<ComponenteTabela isMenuExpanded={isMenuExpanded} ></ComponenteTabela>} />
          

                 
        </Routes>

    </BrowserRouter>
  );
}

export default App;


