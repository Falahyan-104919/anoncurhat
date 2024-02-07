import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import Home from './pages/Home';
import CurhatanListContainer from './features/curhatan-list/CurhatanListContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CurhatanListContainer />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
