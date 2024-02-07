import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CurhatanList from './features/curhatan-list/CurhatanList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<CurhatanList />} />
      </Route>
    </Routes>
  );
}

export default App;
