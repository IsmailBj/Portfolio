import React ,{useEffect, useState} from 'react';
import './App.scss';
import Sidebar from './components/sidebar'
import Center from './components/Center'
import Header from './components/headerRight'
import {MobileView, isMobile } from 'react-device-detect';

function App() {

  const [isMenu, setIsMenu] = useState(false)

  useEffect(()=>{
    console.log(isMenu)
  },[isMenu])
  
  return (
    <div className={`main-container ${isMenu ? "expendMenu" : ""}`}>
        <Sidebar/>
        <Center/>
        <Header
          isMenu={isMenu}
          setIsMenu={setIsMenu}
        />
    </div>
  );
}

export default App;
