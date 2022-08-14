import Link from 'next/link';
import React from 'react';
import { AiFillGithub,  AiFillLinkedin } from 'react-icons/ai';
import Reveal from 'react-reveal/Fade';
import { Container,  Div2, Div3, NavLink, SocialIcons,} from './HeaderStyles';

const Header = () =>  (
  <Container >
   
    
    <Div2>
      <li>
      <Reveal left big>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
        </Reveal>
      </li>
      <li>
      <Reveal left big>
        <Link href="#tech">
          <NavLink>Tech Stack</NavLink>
        </Link>
        </Reveal>
      </li>
      <li>
      <Reveal right big>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
        </Reveal>
      </li>
      <li>
      <Reveal right big>
        <Link href="#about">
          <NavLink a id="button" href="/images/NayabLone.pdf" target="_blank" role="button" download><a>DownLoad CV</a></NavLink>
        </Link>
        </Reveal>
      </li>
    </Div2>
    <Div3>
    <Reveal right big>
      <SocialIcons href="https://github.com/nayab007">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/nayab-lone-904bbb1b5">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </Reveal>
  </Div3>
  
  </Container>
);

export default Header;