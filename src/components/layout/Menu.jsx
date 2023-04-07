/**
 * Component showing vertical menu.
 *
 * @component
 */
import styled from 'styled-components';
import bikeIcon from '../../assets/bike-icon.png';
import yogaIcon from '../../assets/yoga-icon.png';
import swimIcon from '../../assets/swim-icon.png';
import weightIcon from '../../assets/weight-icon.png';

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #020203;
  width: 120px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 120px;
`;

const MenuIcon = styled.img`
  width: 64px;
`;

const MenuCopyright = styled.p`
  color: #ffffff;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  position: absolute;
  bottom: 60px;
`;

function Menu() {
  return (
    <MenuContainer>
      <IconsContainer>
        <MenuIcon src={yogaIcon} alt="yoga" />
        <MenuIcon src={bikeIcon} alt="bike" />
        <MenuIcon src={swimIcon} alt="swim" />
        <MenuIcon src={weightIcon} alt="weight" />
      </IconsContainer>
      <MenuCopyright>Copiryght, SportSee 2020</MenuCopyright>
    </MenuContainer>
  );
}

export default Menu;
