import "./Header.css";
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-img--container">
        <img src={Logo} alt="Logo" loading="lazy" />
      </div>
    </header>
  );
};

export default Header;
