import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { THEMES_BG, THEME_TEXT, NAV_SELECTED_THEME } from "../../constants";
import { useTheme } from "../../hooks";
import { BorderLink3 } from "../../styled";


// & ul > li > a {
//   color: ${props => THEME_TEXT[props.theme]};
//   &:hover {
//     color: ${props => NAV_SELECTED_THEME[props.theme]} !important;
//   }
// }
const NavWrapper = styled.nav`
  max-height: 56px;
  background: ${props => THEMES_BG[props.theme]};
  color: ${props => THEME_TEXT[props.theme]};
  .active,
  .navbar-brand {
    color: ${props => NAV_SELECTED_THEME[props.theme]} !important;
  }
`

function Nav() {
  const [theme] = useTheme();
  const { pathname } = useLocation()
  return (
    <NavWrapper theme={theme} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex justify-content-between align-items-center" to="/">
          <i className="fa-solid fa-book" /> <span className="d-inline-block mx-2">Storyboard</span>
          <i className="fa-solid fa-book" /> 
        </Link>
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
              <BorderLink3
                className={`p-2 my-0 mx-1`}
                aria-current="page"
                to="/"
                active={pathname === "/" ? 1 : 0}
              >
                <i className="fa-solid fa-home" /> Home
              </BorderLink3>
            </li>
            <li className="nav-item">
              <BorderLink3
                className={`p-2 my-0 mx-1`}
                to="/stories/new"
                active={pathname === "/stories/new" ? 1 : 0}
              >
                <i className="fa-solid fa-circle-plus" /> New story
              </BorderLink3>
            </li>
            <li className="nav-item">
              <BorderLink3
                active={pathname === "/settings" ? 1 : 0}
                className={`p-2 my-0 mx-1`}
                to="/settings"
              >
                <i className="fa-solid fa-gear" /> Settings
              </BorderLink3>
            </li>
            <li className="nav-item">
              <BorderLink3
                active={pathname === "/stories" ? 1 : 0}
                className={`p-2 my-0 mx-1`}
                to="/stories"
              >
                <i className="fa-solid fa-newspaper"></i> Stories
              </BorderLink3>
            </li>
            <li className="nav-item">
              <BorderLink3
                className={`p-2 my-0 mx-1`}
                to="/library"
                active={pathname === "/library" ? 1 : 0}
              >
                <i className="fa-solid fa-book" /> Library
              </BorderLink3>
            </li>
          </ul>
        </div>
      </div>
    </NavWrapper>
  )
}

export default Nav;