import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VideoComp from './components/VideoComp.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoComp />} />
      </Routes>
    </Router>
  );
}

export default App;
