import styled from 'styled-components';
import logo from '../assets/SportSee-logo.png';

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  background-color: #020203;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 5;
`;

const HeaderLogo = styled.img`
  height: 60px;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const NavLink = styled.a`
  color: #ffffff;
  font-size: 24px;
  text-decoration: none;
`;

function Header() {
  return (
    <HeaderContainer>
      <a href="#">
        <HeaderLogo src={logo} alt="SportSee logo" />
      </a>
      <HeaderNav>
        <NavLink href="#">Accueil</NavLink>
        <NavLink href="#">Profil</NavLink>
        <NavLink href="#">Réglage</NavLink>
        <NavLink href="#">Communauté</NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
