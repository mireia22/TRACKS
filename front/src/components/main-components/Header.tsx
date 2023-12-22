import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[3rem] w-full p-3 bg-black text-white flex items-center justify-between font-semibold border-b-2 border-white">
      <Link to="/"> HOME</Link>
      <ul className="flex gap-2 text-sm ">
        <Link to="/login" className="px-2 py-1 bg-purple-900  rounded-md">
          <li>Login</li>
        </Link>
        <Link
          to="/register"
          className="px-2 py-1 bg-white text-dark-purple border-2 border-dark-purple
       rounded-md"
        >
          <li>Register</li>
        </Link>
        <Link
          to="/profile"
          className="px-2 py-1 bg-white text-dark-purple border-2 border-dark-purple
       rounded-md"
        >
          <li>Profile</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
