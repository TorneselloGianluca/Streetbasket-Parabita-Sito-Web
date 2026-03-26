import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; 
import StreetbasketParabita from './pagine/StreetbasketParabita';
import './App.css';
import WorkInProgress from './pagine/WorkInProgress';
import Edizione2026 from './pagine/Edizione2026';

function App() {
  return (
      <Router basename="/Streetbasket-Parabita-Sito-Web">
        <Nav /> 
        <Routes>
          <Route path="/" element={<StreetbasketParabita />} />
          <Route path="/workInProgress" element={<WorkInProgress />} />
          <Route path="/Edizione2026" element={<Edizione2026 />} />
        </Routes>
      </Router>
  );
}

export default App;