import HeaderLayout from './components/HeaderLayout';
import MainMenu from './components/MainMenu';
import InfoBar from './components/InfoBar';
import Slider from './components/Slider';
import Hamburger from './components/Hamburger';

import styled from 'styled-components';
import MobileMenu from './components/MobileMenu';
import { useEffect, useState } from 'react';
import PrimaryMenu from './components/PrimaryMenu';

const HamburgerWrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background-color: white;
  width: 6rem;
  display: flex;
  justify-content: center;
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
    </>
  );
}

export default App;
