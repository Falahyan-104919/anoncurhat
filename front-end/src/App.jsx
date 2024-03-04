import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import Home from './pages/Home';
import CurhatanListContainer from './features/curhatan-list/CurhatanListContainer';
import ProfileSettingContainer from './features/profile_settings/container/ProfileSettingContainer';
import AccountInformation from './features/profile_settings/container/AccountInformationContainer';
import ChangePassword from './features/profile_settings/container/ChangePasswordContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CurhatanListContainer />} />
          <Route path="newest" element={<CurhatanListContainer />} />
          <Route path="hottest" element={<CurhatanListContainer />} />
          <Route path="setting_profile" element={<ProfileSettingContainer />}>
            <Route
              path="account_information"
              element={<AccountInformation />}
            />
            <Route path="change_password" element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
