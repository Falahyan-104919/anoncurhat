import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ui/button';
import LoginDialog from '@/features/authentication/components/LoginDialog';
import { logout } from '@/features/authentication/hooks/authSlice';
import { LogOut } from 'lucide-react';

export default function Navbar() {
  const authState = useSelector((state) => state.auth);
  const { isLoggedIn } = authState;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center justify-between h-16 bg-zinc-950">
      <h1 className="scroll-m-20 text-3xl font-extrabold text-white tracking-tight pl-4 lg:text-3xl">
        anoncurhat.
      </h1>
      {isLoggedIn ? (
        <div className="flex flex-row items-center justify-between gap-4 pr-4">
          <Button variant="destructive" onClick={() => dispatch(logout())}>
            <LogOut size="24px" style={{ marginRight: '6px' }} />
            Log Out
          </Button>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between gap-4 pr-4">
          <LoginDialog />
          <p className="text-white">or</p>
          <Button variant="secondary"> Sign Up </Button>
        </div>
      )}
    </div>
  );
}
