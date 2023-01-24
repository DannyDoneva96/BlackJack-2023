import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Game from './components/Game.js/Game'
import Settings from './components/Settings/Settings'

import Loading from './components/Loading/Loading'
import Rules from './components/Rules/Rules';
function App() {
  return (
    <div className="App">
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/rules" element={<Rules />} />

          <Route path="/loading" element={<Loading />} />

       </Routes>

    </div>
  );
}

export default App;
