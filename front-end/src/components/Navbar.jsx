import { useSelector } from 'react-redux';
import LoginDialog from '@/features/authentication/components/LoginDialog';
import RegistrationDialog from '@/features/authentication/components/RegistrationDialog';
import UserDropdownMenu from './DropdownMenu';
import CreateCurhatDialog from '@/features/curhatan-list/components/CreateCurhatDialog';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const authState = useSelector((state) => state.auth);
  const { isLoggedIn } = authState;
  return (
    <div className="flex flex-row items-center justify-between h-16 bg-zinc-950">
      <Link to="/">
        <h1 className="scroll-m-20 text-3xl font-extrabold text-white tracking-tight pl-4 lg:text-3xl">
          anoncurhat.
        </h1>
      </Link>
      {isLoggedIn ? (
        <div className="flex flex-row items-center justify-between gap-4 pr-4">
          <CreateCurhatDialog />
          <UserDropdownMenu />
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between gap-4 pr-4">
          <LoginDialog />
          <p className="text-white">or</p>
          <RegistrationDialog />
        </div>
      )}
    </div>
  );
}
