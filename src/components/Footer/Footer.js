import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
    <LinkColumn>
      <LinkTitle>Resumé</LinkTitle>
        <LinkItem a id="button" href="/images/Nayab-Lone.pdf" target="_blank" role="button" download>
          
                <a>Download  Resumé</a>
        </LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem >0738236700</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem id="sayHi" href="mailto:nayab.lone@hyperisland.se" >
        <a>Say hi!</a>
        </LinkItem>
      </LinkColumn>
      
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Your Next Web Developer</Slogan>
      </CompanyContainer>
      <SocialContainer>
         
        <SocialIcons href="https://www.github.com/Nayab007">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/nayab-lone-904bbb1b5">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;




