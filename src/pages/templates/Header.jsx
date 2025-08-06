import React, { useContext } from "react";
import { NavLink } from "react-router";
import "./Header.css";
import ThemeContext from "../../contexts/ThemeContext";
import { MoonFilled, SunFilled } from "@ant-design/icons";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div onClick={toggleTheme}>
        {theme === "light" ? <MoonFilled /> : <SunFilled />}
      </div>
        
    </header>
  );
};

export default Header;
