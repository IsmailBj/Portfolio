import React ,{useState, useEffect} from 'react';
import './App.scss';
import Sidebar from './components/template/sidebar'
import Center from './components/template/Center'
import Header from './components/template/headerRight'
import { CheckDeviceMode } from './components/functions/CheckDeviceMode';
import { debounce } from './components/functions/debounce';

function App() {

  const [isMenu, setIsMenu] = useState(false)
  const [deviceView, setDeviceView] = useState('')
  const [loading, setLoading] = useState(true)

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
      <div className="ring">Loading
        <span className='loadBar'></span>
      </div>
    </>) : (
    <>
       <div className={`main-container ${isMenu ? "expendMenu" : ""} ${deviceView}`}>
        <Sidebar
          deviceView={deviceView}
        />
        <Center
          deviceView={deviceView}     
        />
        <Header
          isMenu={isMenu}
          deviceView={deviceView}
          setIsMenu={setIsMenu}
        />
    </div>
    </>)
 
  )
}

export default App;
