import {Logo, Search, Icons} from './index';
import { useUser } from "../../context/UserContext";

export default function Navbar() {
  const { user } = useUser();
  console.log("Navbar user:", user);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow p-2 border-b dark:border-gray-700 sticky top-0 z-10">
      <div className="container max-w-full mx-auto md:px-2 flex items-center justify-between">
        <Logo />
        <Search />
        <Icons user={user} />
      </div>
    </nav>
  );
}
