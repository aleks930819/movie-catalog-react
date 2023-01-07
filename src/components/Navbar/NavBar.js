import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-cyan-900 w-screen h-2/5 text-white pt-5 text-lg 2xl:text-2xl">
      <div className="flex cursor-pointer justify-end gap-2 pr-6 pt-6 pb-6">
        <p>My Movies</p>
         <FaUserAlt/>
      </div>
    </nav>
  );
};

export default NavBar;
