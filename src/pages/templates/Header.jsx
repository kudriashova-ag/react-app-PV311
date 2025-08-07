import React, { useContext } from "react";
import { NavLink } from "react-router";
import "./Header.css";
import ThemeContext from "../../contexts/ThemeContext";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import LanguageContext from "../../contexts/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div className="right-header">
        <div onClick={toggleTheme}>
          {theme === "light" ? <MoonFilled /> : <SunFilled />}
        </div>

        <div className="lang">
          <span style={{ opacity: lang === "ua" ? 1 : 0.5 }} onClick={() => setLang("ua")}>UA</span> |
          <span style={{ opacity: lang === "en" ? 1 : 0.5 }} onClick={() => setLang("en")}>EN</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
