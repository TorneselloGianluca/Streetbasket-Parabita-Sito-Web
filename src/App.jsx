import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; 
import StreetbasketParabita from './pagine/StreetbasketParabita';
import './App.css';
import WorkInProgress from './pagine/WorkInProgress';
import Edizione2026 from './pagine/Edizione2026';
import Sponsor from './pagine/Sponsor';
import Lavora from './pagine/Lavora';
import Merchandising from './pagine/Merchandising';
import Senior from './pagine/Senior';
import u19 from './pagine/u19';
import u17 from './pagine/u17';

import Admin from './pagine/Admin';


import AggiornamentoPartite from './pagine/aggiornamentoPartite';
import AggiornamentoClassifiche from './pagine/aggiornamentoClassifiche';
import GestioneSquadre from './pagine/gestioneSquadre';
import Gallery from './pagine/Gallery';



function App() {
  return (
      <Router>
        <Nav /> 
        <Routes>
          <Route path="/" element={<StreetbasketParabita />} />
          <Route path="/workInProgress" element={<WorkInProgress />} />
          <Route path="/Edizione2026" element={<Edizione2026 />} />
          <Route path="/sponsor" element={<WorkInProgress />} />
          <Route path="/lavoraConNoi" element={<Lavora />} />
          <Route path="/merchandising" element={<Merchandising />} />
          <Route path="/lavoraConNoi" element={<Lavora />} />
          {/* Da sistemare le rotte*/}
          <Route path="/iscrizione/senior" element={<Senior/>} />
          <Route path="/iscrizione/u19" element={<WorkInProgress />} />
          <Route path="/iscrizione/u17" element={<WorkInProgress />} />
          <Route path="/admin/partite" element={<AggiornamentoPartite />} />
          <Route path="/admin/classifiche" element={<AggiornamentoClassifiche />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/squadre" element={<GestioneSquadre />} />
          <Route path="/gallery" element={<Gallery />} />        
        </Routes>
      </Router>
  );
}

export default App;