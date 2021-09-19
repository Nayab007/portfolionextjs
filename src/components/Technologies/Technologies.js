import React from 'react';
import Slide from 'react-reveal/Slide';
import { DiJsBadge, DiReact, DiZend, } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';





const Technologies = () =>  (


 

 <Section id="tech">
    
   <SectionDivider />
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <br/>
   
   
   <SectionText>
     I have worked with a range of technologies in the web development world.
   </SectionText>
  
   
   <List>
     <ListItem>
     <DiReact size="3rem" />
     <DiJsBadge size="3rem"/>
     <ListContainer>
       <ListTitle>Front-end</ListTitle>
       <ListParagraph>
      
         Experience with <br/>
         React.js, Next.js, JavaScript, Styled Components & much more
        
       </ListParagraph>
     </ListContainer>
     </ListItem>
     <ListItem>
     <DiZend size="3rem"/>
     <ListContainer>
       <ListTitle>UI/UX</ListTitle>
       <ListParagraph>
         Experience with <br/>
        Figma
       </ListParagraph>
     </ListContainer>
     </ListItem>
   </List>
  
 </Section>

);

export default Technologies;
