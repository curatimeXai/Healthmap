import styled from 'styled-components';
import { BLACK, BREAKPOINT_DESKTOP, DARK_RED, WHITE } from '../styled/Variables';
import { useState, useEffect } from 'react';
import { MenuLinks } from './MenuLinks';
import myCustomArrow from "/images/arrow.png";
import { Button, ButtonWrapper } from '../styled/Buttons';
import { NavLink, useNavigate  } from 'react-router-dom';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 10;
`;

const HamburgerButton = styled.div`
  margin-right: 30px;
  width: 40px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 100;

  .line {
    width: 100%;
    height: 5px;
    background-color: ${WHITE};
    border-radius: 10px;
    transition: transform 0.3s, opacity 0.3s;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 16px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -16px);
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    display: none;
  }
`;

const MenuList = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 60vw;
  background: ${DARK_RED};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  padding-top: 80px;
  padding-left: 50px;
  border-radius: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 99;
  overflow-y: auto;
  max-height: 90vh;

  li {
    width: 100%;
    list-style-type: none;
    cursor: pointer;

    a, span {
      font-size: 1.3rem;
      color: ${WHITE};
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      width: 100%;
    }
  }

  .submenu {
    display: none;
    flex-direction: column;
    gap: 10px;
    padding-left: 15px;
    color: ${BLACK};
    background: rgba(0, 0, 0, 0.1);
  }

  .submenu.open {
    display: flex;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    display: none;
  }
`;

type ArrowIconProps = {
  isOpen: boolean;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({ isOpen }) => (
  <img
    src={myCustomArrow}
    alt="Arrow icon"
    style={{
      transition: 'transform 0.3s',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }}
  />
);

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleSubMenu = (path: string) => {
    if (openSubMenu === path) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(path);
      navigate(path);
    }
  };

  return (
    <MenuContainer>
      <HamburgerButton onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </HamburgerButton>
      <MenuList isOpen={isOpen}>
        {MenuLinks.map((link) => (
          <li key={link.path}>
            {link.subLinks ? (
              <span onClick={() => toggleSubMenu(link.path)}>
                {link.label}
                <ArrowIcon isOpen={openSubMenu === link.path} />
              </span>
            ) : (
              <NavLink to={link.path} onClick={closeMenu}>
                {link.label}
              </NavLink>
            )}

            {link.subLinks && (
              <ul className={`submenu ${openSubMenu === link.path ? 'open' : ''}`}>
                {link.subLinks.map((subLink) => (
                  <li key={subLink.path}>
                    <NavLink
                      to={subLink.path}
                      onClick={closeMenu}
                      target={subLink.target ? subLink.target : '_self'}
                      rel="noopener noreferrer"
                    >
                      {subLink.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <ButtonWrapper>
        <NavLink to="/contactus" onClick={closeMenu}>
          <Button>Contact Us</Button>
        </NavLink>
        </ButtonWrapper>
      </MenuList>
    </MenuContainer>
  );
};