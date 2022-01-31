import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Animals from './screens/Animals';
import Tour from './screens/Tour';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/badside' element={<Tour type='bad' />} />
          <Route path='/goodside' element={<Tour type='good' />} />
          <Route path='/goodside/animals/biome/:biomeId' element={<Animals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
