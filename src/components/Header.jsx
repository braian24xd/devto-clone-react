import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/img/logo.png";
import userImg from "../assets/img/users/default.png";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <header>
      <section className="header">
        <div className="header__search">
          <Link to="/">
            <img className="header__search--logo" src={logo} alt="Logo" />
          </Link>
          <input
            className="header__search--search"
            type="search"
            placeholder="Find related posts..."
          />
        </div>

        <div className="header__buttons">
          {!user ? (
            <>
              <Link to="/login" id="loginBtn">
                <button className="secondary__btn">Log in</button>
              </Link>
              <Link to="/register" id="accountBtn">
                <button className="primary__btn">Create account</button>
              </Link>
            </>
          ) : (
            <div className="header__user" id="userMenu">
              <button className="img__btn" onClick={toggleDropdown} id="userDropdownBtn">
                <img src={userImg} alt="User avatar" />
                <span id="usernameDisplay">{user.username}</span>
              </button>
              {dropdownOpen && (
                <ul className="dropdownOptions" id="dropdownOptions">
                  <Link to="/profile">
                    <li>
                      <button className="secondary__btn" id="viewProfileBtn">
                        Ver perfil
                      </button>
                    </li>
                  </Link>
                  <hr />
                  <li>
                    <button className="secondary__btn" id="logoutBtn" onClick={handleLogout}>
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;