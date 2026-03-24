import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; 
import StreetbasketParabita from './pagine/StreetbasketParabita';
import './App.css';
import WorkInProgress from './pagine/WorkInProgress';


function App() {
  return (
      <Router basename="/Streetbasket-Parabita-Sito-Web">
        <Nav /> 
        <Routes>
          <Route path="/" element={<StreetbasketParabita />} />
          <Route path="/workInProgress" element={<WorkInProgress />} />
        </Routes>
      </Router>
  );
}

export default App;