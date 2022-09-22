import { useEffect, useState } from 'react';
import styled from 'styled-components';

import HeaderLayout from './layouts/HeaderLayout';
import MainMenu from './components/Navigation/MainMenu';
import InfoBar from './components/Navigation/InfoBar';
import Hamburger from './components/Navigation/Hamburger';
import Slider from './components/Slider/Slider';
import MobileMenu from './components/Navigation/MobileMenu';
import PrimaryMenu from './components/Navigation/PrimaryMenu';
import MainLayout from './layouts/MainLayout';
import FooterLayout from './layouts/FooterLayout';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import Routes from './components/Routes/Routes';

const HamburgerWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: white;
  width: 5rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (min-width: 768px){
    width: 6rem;
    height: 5rem;
    top: 2rem;
    right: 2rem;
  }

  @media (min-width: 1200px) {
        display: none;
    }


`

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopVisible, setIsTopVisible] = useState(true);

  const changeMobileMenuState = () => {
    setIsMobileMenuOpen(prev => !prev);
  }

  const setStateTopHandler = () => {
    if(window.scrollY > 0)
      setIsTopVisible(false);
    else setIsTopVisible(true);
  }

  useEffect(()=>{
      window.addEventListener('scroll', setStateTopHandler);
      return ()=> window.removeEventListener('scroll', setStateTopHandler)
  }, [])



  return (
    <>
      <HeaderLayout>
        <Slider />
        <InfoBar isTopVisible={isTopVisible} />
        <MainMenu isTopVisible={isTopVisible} />
        <PrimaryMenu isTopVisible={isTopVisible} />
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
        <HamburgerWrapper>
          <Hamburger changeMobileMenuState={changeMobileMenuState}/>
        </HamburgerWrapper>
      </HeaderLayout>

      <MainLayout>
        <AboutUs />
        <Routes />
        <Gallery />
      </MainLayout>
      <FooterLayout>

      </FooterLayout>
    </>
  );
}

export default App;
