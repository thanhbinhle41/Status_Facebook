import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import InputStatus from './components/InputStatus/InputStatus';
import ListFriend from './components/ListFriend/ListFriend';
import Popup from './components/InputStatus/Popup';
import { useState } from 'react';

function App() {

  const [showPopUp, setShowPopUp] = useState(false);

  const [status, setStatus] = useState([]) 

  return (
    <>
      <div className='main'>
        <Header></Header>
        <div className='container'>
          <SideBar></SideBar>
          <InputStatus 
          showPopUp={showPopUp} setShowPopUp={setShowPopUp} status={status} setStatus={setStatus}>
          </InputStatus>
          <ListFriend></ListFriend>
          {showPopUp ? <Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp}
          status={status} setStatus={setStatus}>
          </Popup> : null}
          
        </div>
        
      </div>
    </>
  );
}

export default App;
