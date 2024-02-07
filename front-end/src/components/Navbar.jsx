import { Button } from './ui/button';

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between h-16 bg-zinc-950">
      <h1 className="scroll-m-20 text-3xl font-extrabold text-white tracking-tight pl-4 lg:text-3xl">
        anoncurhat.
      </h1>
      <div className="flex flex-row items-center justify-between gap-4 pr-4">
        <Button variant="outline"> Sign In </Button>
        <p className="text-white">or</p>
        <Button variant="secondary"> Sign Up </Button>
      </div>
    </div>
  );
}
