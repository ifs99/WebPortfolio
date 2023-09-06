import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      Im currently looking to land a job in the tech industry, here you can 
      find my projects and the technologies i used to develop them!
    </SectionText>
    <Button onClick={()=> window.location = 'https://google.com'}>Learn more</Button>
  </LeftSection>
</Section>
);

export default Hero;