import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/img/logo.png";
const NavBar = ({logout}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/cadastro"}>
              Cadastrar Veiculo
            </NavLink>
          </li>

          <li className="nav-item">
            <button className="btn  btn-outline-primary"  onClick={logout}>
              Sair
            </button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
