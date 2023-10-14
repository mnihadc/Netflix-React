import React from 'react';
import './App.css';
import {original,action} from './url'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
   <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost url={original} title='Netflix Orginals'/>
    <RowPost url={action} title='Action' isSmall />
   </div>
  );
}

export default App;
