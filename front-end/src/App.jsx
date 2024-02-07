import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CurhatanListContainer from './features/curhatan-list/CurhatanListContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<CurhatanListContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
