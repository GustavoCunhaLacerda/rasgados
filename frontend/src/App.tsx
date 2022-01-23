import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Animals from './screens/Animals';
import Threats from './screens/Threats';
import Tour from './screens/Tour';

function App() {
  function getScrollbarWidth() {
    // Get window width including scrollbar.
    const withScrollBar = window.innerWidth;

    // Get window width excluding scrollbar.
    const noScrollBar = document.querySelector('body')?.getBoundingClientRect().width;

    // Calc the scrollbar width.
    const scrollbarWidth = `${withScrollBar - (noScrollBar ?? 0)}px`;

    // Update the CSS custom property value.
    let root = document.documentElement;
    root.style.setProperty('--scrollbar', scrollbarWidth);
  }
  return (
    <Router>
      <div className='app' onLoad={getScrollbarWidth}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/badside' element={<Tour type='bad' />} />
          <Route path='/goodside' element={<Tour type='good' />} />
          <Route path='/goodside/animals' element={<Animals />} />
          <Route path='/badside/threats' element={<Threats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
