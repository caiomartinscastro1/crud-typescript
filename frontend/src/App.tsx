import { ReactElement } from "react"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Dados from './pages/Dados';
import Atualizar from "./pages/Atualizar";

function App(): ReactElement {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cadastro/>}/>
          <Route path="/dados" element={<Dados/>}/>
          <Route path="/atualizar/:id" element={<Atualizar/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
