import { useContext } from "react";
import ThemeContext from "../store/themeContext";

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <nav className="bg-light shadow py-4">
      <div className="container flex items-center justify-between">
        <h3>
          <a href="#">Logo</a>
        </h3>
        <ul className="flex items-center gap-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <button onClick={themeCtx.themeToggle} className="btn" href="#">
              Toggle theme
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
