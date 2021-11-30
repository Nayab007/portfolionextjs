import React from 'react';
import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

import { LeftSection, RightSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle style={{ color: '#343a40' }} main left>
        Nayab Lone
        <Zoom>
        
        </Zoom>
      </SectionTitle>
      <SectionText style={{ color: '#343a40' }}>
        Building state-of-the-art, easy-to-use, user-friendly websites and
        applications is truly a passion of mine.
      </SectionText>
    </LeftSection>
    <RightSection>
      
       
        <Zoom>
          <Image
            src="/images/nayab1.jpg"
            alt="nayab1"
            width="290"
            height="290"
            layout="responsive"
          />
        </Zoom>
      
    </RightSection>
  </Section>
);

export default Hero;
