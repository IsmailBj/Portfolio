import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar'
import Center from './components/Center'
import Header from './components/headerRight'

function App() {
  return (
    <div className="main-container">
        <Sidebar/>
        <Center/>
        <Header/>
    </div>
  );
}

export default App;
