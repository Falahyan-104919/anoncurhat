import { Button } from '@/components/ui/button';
import PageTitle from '../components/PageTitle';
import { CircleUser, ShieldAlert } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function ProfileSettingContainer() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-8 bg-zinc-950">
      <PageTitle />
      <div className="flex flex-row gap-8 h-screen mt-4 rounded-lg">
        <div className="h-full w-[350px] bg-zinc-900 rounded-lg">
          <div className="flex flex-col gap-4 p-5">
            <Button
              variant="secondary"
              onClick={() => navigate('account_information')}
            >
              <CircleUser style={{ marginRight: '8px' }} />
              Account Information
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate('change_password')}
            >
              <ShieldAlert style={{ marginRight: '8px' }} />
              Change Password
            </Button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
