import React from 'react';
import Image from "next/image";
import Zoom from "react-reveal/Zoom";


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection  >
      <SectionTitle main left>
         Nayab Lone
         <Zoom right>
          <Image src="/images/nayab1.jpg" alt="nayab1" width="310" color="#343a40" height="310" layout="responsive"/>
          </Zoom>
        </SectionTitle>
        <SectionText style={{color: "#343a40"}}>
          Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine.
        </SectionText>
      
    </LeftSection>
  </Section>
);

export default Hero;