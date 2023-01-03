import styled from "styled-components";
import Button from "./Button";
import { green} from "./Colors";


const NavLink = styled.a`
 
 
  display: inline-block;
  position:: relative;
  margin-left: 15px;
`;





const NavLogo = styled.p`
  width: 65%;
  color: ${green};
  font-size: 30px;
  margin-left: 15px;
`;

const OL = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

const LI = styled.li`
  color: ${green};
  position: relative;
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = () => {
  return (
    <Nav>
      <NavLogo>B</NavLogo>
    
        <OL>
          <LI>
            <NavLink>1About</NavLink>
          </LI>
          <LI>
            <NavLink>2Experience</NavLink>
          </LI>
          <LI>
            <NavLink>3Work</NavLink>
          </LI>
          <LI>
            <NavLink>4Contact</NavLink>
          </LI>
        </OL>
        <Button as={"a"} href={"#"} margin={"12px"}>Resume</Button>
     
    </Nav>
  );
};
export default NavBar;
