import styled from 'styled-components';

export const LeftSection = styled.div`
  
    width: 100%;
  
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-color: #7ed6df;
    background-image: linear-gradient(315deg, #182b3a 0%, #20a4f3 74%);

  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    
    position: relative;
    left: 12px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;
  }
`;
export const RightSection = styled.div`
  width: 40vw;
 
  
 
  
 
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    
    position: relative;
    right: 12px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
      
    margin: 0 auto;
  }
`;
