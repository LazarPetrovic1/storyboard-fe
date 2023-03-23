import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { THEMES_BG, THEME_TEXT, NAV_SELECTED_THEME } from "../../constants";
import { useTheme } from "../../hooks";

const NavWrapper = styled.nav`
  background: ${props => THEMES_BG[props.theme]};
  color: ${props => THEME_TEXT[props.theme]};
  & ul > li > a {
    color: ${props => THEME_TEXT[props.theme]};
    &:hover {
      color: ${props => NAV_SELECTED_THEME[props.theme]} !important;
    }
  }
  .active,
  .navbar-brand {
    color: ${props => NAV_SELECTED_THEME[props.theme]} !important;
  }
`

function Nav() {
  const [theme] = useTheme();
  console.log("GET VAL", NAV_SELECTED_THEME[theme]);
  const { pathname } = useLocation()
  return (
    <NavWrapper
      theme={theme}
      className="navbar navbar-expand-lg"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Logo here</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon toggler-changes"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" && "active"}`}
                aria-current="page"
                to="/"
              >
                <i className="fa-solid fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/stories/new" && "active"}`}
                to="/stories/new"
              >
                <i className="fa-solid fa-circle-plus" /> New story
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/settings" && "active"}`}
                to="/settings"
              >
                <i className="fa-solid fa-gear" /> Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/stories" && "active"}`}
                to="/stories"
              >
                <i className="fa-solid fa-newspaper"></i> Stories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavWrapper>
  )
}

export default Nav;