import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';





export const Container  = styled.div`
  display: grid;
  position: fixed;
  
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3rem;
  background-color: transparent;
  padding: 1rem;
  border-radius: 35px;
  padding-top: 0.2rem;
  z-index: 999;
  &:hover {
  background-color: #606c88;
  color: black;
}
  

  

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    position: relative;
    padding-left: 14rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding: 1rem;
    border-radius: 45px;
    &:hover {
  background-color: #606c88;
  padding: 1rem;
  border-radius: 20px;
  padding-top: 0.2rem;
  color: black;
    }
  }
`;

export const Span = styled.span`
    font-size: 2rem;
    margin-left: 1rem;
    
    
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2/ 2 / 4;
  display: flex;
  width: 35em;
  
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 6px;
    grid-area: 1 / 2/  3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  margin-left: 1rem;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: black;
  transition: 0.4s ease;
  &:hover {
color: #ffffff;

    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 16px;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 12px;
    color: black;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
font-size: 1rem;
margin-left: -14rem;
color:  black ;
border-radius: 100px;
  padding: 10px;
&:hover {
    color: #fff;
    transform: scale(1.2);
    cursor: pointer;
    
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    position: relative;
    left: -4vw;
    top: 3rem;
    color: black;
    &:hover {
    color: #16BFFD;
    transform: scale(1.2);
    cursor: pointer;
    
  }
  }
`