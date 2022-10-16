import React ,{useState} from 'react';
import './App.scss';
import Sidebar from './components/template/sidebar'
import Center from './components/template/Center'
import Header from './components/template/headerRight'
import {MobileView, isMobile } from 'react-device-detect';

function App() {

  const [isMenu, setIsMenu] = useState(false)

  return (
    <div className={`main-container ${isMenu ? "expendMenu" : ""}`}>
        <Sidebar
        />
        <Center/>
        <Header
          isMenu={isMenu}
          setIsMenu={setIsMenu}
        />
    </div>
  );
}

export default App;
