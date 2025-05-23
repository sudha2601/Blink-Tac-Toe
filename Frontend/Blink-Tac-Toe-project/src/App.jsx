import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import CategorySelect from './Components/CategorySelect';
import Grid from './Components/Grid';
import Play from './Components/Play';
import Winner from './Components/Winner';
import Naming from './Components/Naming';

function App() {
  return (
    <Router>
      <div className='h-screen bg-slate-400 overflow-y-auto'>
        <div className='sticky top-0 z-50 bg-slate-400'>
          <Header />
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Play/>} />
          <Route path="/select-category" element={<CategorySelect/>} />
          <Route path="/play" element={<Grid/>} />
          <Route path="/winner" element={<Winner/>} />
          <Route path="/Naming" element={<Naming/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
