import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starred from './pages/Starred';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
