import Link from 'next/link';
import React from 'react';
import { AiFillGithub,  AiFillLinkedin } from 'react-icons/ai';
import { DiDebian } from 'react-icons/di';
import Reveal from 'react-reveal/Fade';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

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
          <NavLink>Technologies</NavLink>
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
          <NavLink a id="button" href="/images/Nayab-Lone.pdf" target="_blank" role="button" download><a>DownLoad CV</a></NavLink>
        </Link>
        </Reveal>
      </li>
    </Div2>
    <Div3>
    <Reveal right big>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://Linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </Reveal>
  </Div3>
  
  </Container>
);

export default Header;