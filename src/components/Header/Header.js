import { NavLink } from "react-router-dom";
import "./Header.scss";
import HeaderLogo from "../../assets/logo.png";
import HeaderBackground from "../../assets/header-img.png";
import { useContext } from "react";
import { LanguageSelector } from "../../App";

const Header = () => {
  const { setLanguage } = useContext(LanguageSelector);
  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo-image" src={HeaderLogo} />
      </NavLink>
      <NavLink to="/movie/:movieId">Peliculas</NavLink>
      <NavLink to="/game">Juego</NavLink>
      <div className="header__lang">
        <button onClick={() => setLanguage("es-ES")} className="header__lang-btn">
          ES
        </button>
        <button onClick={() => setLanguage("en-EN")} className="header__lang-btn">
          EN
        </button>
      </div>
      <img src={HeaderBackground} />
    </div>
  );
};

export default Header;
