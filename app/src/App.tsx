import {useState, useEffect} from 'react';
import './App.scss';
import Profile from './components/template/Profile/sidebar'
import Center from './components/template/Center'
import Header from './components/template/header/headerRight'
import { CheckDeviceMode } from './components/functions/CheckDeviceMode';
import { debounce } from './components/functions/debounce';
import LoadingPage from './components/template/loaderEffect/loadingPage';
import MobHeader from './components/template/mobile/mobileHeader'

function App() {

  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [isProfile, setIsProfile] = useState<boolean>(false)
	const [deviceView, setDeviceView] = useState<'mobile' | 'tablet' | 'desktop' | ''>('');
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    CheckDeviceMode(setDeviceView)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])

  
  useEffect(()=>{
    const debouncedHandleResize = debounce(()=>CheckDeviceMode(setDeviceView),500)

    window.addEventListener('resize', debouncedHandleResize)

    return () => window.removeEventListener('resize', debouncedHandleResize)
  },[deviceView])

  return (
    loading ? (
    <>
      <LoadingPage/>
    </>) : (
    <>
       <div className={`main-container ${isMenu ? "expendMenu" : ""} ${deviceView}`}>
              {(deviceView === "tablet" || deviceView === "mobile") && (
              <MobHeader 
                isMenu={isMenu}
                isProfile={isProfile}
                setIsMenu={setIsMenu} 
                setIsProfile={setIsProfile}
              />)} 
              <Profile
                 isProfile={isProfile}
                 setIsProfile={setIsProfile}
                 deviceView={deviceView}
              />
              <Center/>
                  <Header
                    isMenu={isMenu}
                    setIsMenu={setIsMenu}
                    deviceView={deviceView}
                />
      </div>
    </>)
 
  )
}

export default App;
