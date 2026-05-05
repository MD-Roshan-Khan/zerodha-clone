import React from 'react';
import Brokerage from './Brokerage';
import HeroSection from './HeroSection';  
import OpenAccount  from '../OpenAccount';  

function PricingPage() {
    return ( 
        <>
            <HeroSection />
            <OpenAccount />
            <Brokerage />
        </>
     );
}

export default PricingPage;