import styled from "styled-components";
import { BLACK, BREAKPOINT_DESKTOP, DARK_RED, GREY, WHITE } from "../styled/Variables";
import { NavLink } from "react-router-dom";
import { MenuLinks } from "./MenuLinks";
import arrowIcon from "/images/arrow.png";
import { Button } from "../styled/Buttons";

export const NavigationContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

export const DesktopNav = styled.nav`
  display: none;

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    display: block;
    width: 100%;
    padding-left: 100px;
    padding-right: 0;
    margin-right: 0;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 80%;
      padding: 0;
      padding-top: 20px;
      margin: 0;
      list-style: none;
    }

    li {
      position: relative;
      flex-grow: 1;
      text-align: center;
      
      &:hover > .submenu {
        display: grid;
      }
    }

    a {
      white-space: nowrap;
      font-size: 1.2rem;
      font-weight: 700;
      color: ${WHITE};
      text-decoration: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: relative;
      padding-bottom: 20px;
    }

    li a:hover {
      text-decoration: underline;
    }

    li a:active {
      color: ${GREY};
    }

    li a:hover:active {
      text-decoration: underline;
    }

    .icon {
      width: 10px;
      height: 10px;
      margin-left: 8px;
    }

    /* ----  Contact us-Button in the list ------ */
    li:last-child a {
      text-decoration: none;
    }

    li:last-child a:hover {
      text-decoration: none;
    }
    
    /* ------------------  Submenu -------------------- */
    ul.submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      min-width: 90%;
      background-color: ${WHITE};
      list-style: none;
      padding: 20px;
      margin: 0;
      border-radius: 5px;
      background-image: linear-gradient(360deg, #FFFFFF 0%, #DDD8D0 78%, #CDC6BA 94.5%, #B9B4A8 100%);
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      align-items: center;
      text-align: center;
      //grid-template-rows: repeat(2, auto);
      gap: 20px;
      padding-top: 10px;
      padding-bottom: 15px;
    }

    ul.submenu li {
      display: block;
      text-align: center;
      z-index: 9999;
    }

    ul.submenu li a {
      color: ${BLACK};
      display: block;
      font-weight: 600;
      font-size: 1.2rem;
      padding: 2px;
      text-align: center;
    }

    ul.submenu li a:hover {
      color: ${DARK_RED};
    }

    ul.submenu li a:active {
      color: ${GREY};
    }
  }
`;

export const DesktopMenu = () => {
  return (
    <DesktopNav>
      <ul>
            {MenuLinks.map((link) => (
        <li key={link.path}>
          {link.target ? (
            <a href={link.path} target={link.target} rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <NavLink to={link.path}>
              {link.label}
              {link.subLinks && <img src={arrowIcon} alt="arrow icon" className="icon" />}
            </NavLink>
          )}

          {link.subLinks && (
            <ul className="submenu">
              {link.subLinks.map((subLink) => (
                <li key={subLink.path}>
                  <NavLink to={subLink.path}>{subLink.label}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}

        <li>
          <NavLink to="/contact">
            <Button>Contact Us</Button>
          </NavLink>
        </li>
      </ul>
    </DesktopNav>
  );
};

