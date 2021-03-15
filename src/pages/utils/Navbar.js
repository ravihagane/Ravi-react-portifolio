// import Navbarstyle from "./";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className={`flex flex-row justify-between h-20 items-center bg-blue-500`}
    >
      <img
        id="logo"
        src={`/favicon.ico`}
        alt="logo"
        className={`md:w-10 md:h-10 md:ml-10`}
      ></img>
      <div id="menu">
        <Link to="/">
          <span className={`ml-10`}>Home</span>
        </Link>
        <Link to="/project">
          <span className={`ml-10`}>Project</span>
        </Link>
        <Link to="/contact">
          <span className={`ml-10`}>Contact</span>
        </Link>
      </div>
      <button
        id="softCTA"
        className={`md:mr-10 p-2 px-5 border border-gray-800 bg-yellow-500`}
      >
        HIRE ME
      </button>
    </div>
  );
};

export default Navbar;
