import {useState, useEffect, FC} from 'react';
import './App.scss';
import Profile from './components/Profile/sidebar'
import Center from './components/Center/Center'
import Header from './components/header/headerRight'
import { CheckDeviceMode } from './functions/CheckDeviceMode';
import { debounce } from './functions/debounce';
import LoadingPage from './components/loaderEffect/loadingPage';
import MobHeader from './components/mobile/mobileHeader'

const App: FC = () => {

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
