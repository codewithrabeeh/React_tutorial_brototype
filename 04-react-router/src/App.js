import logo from './logo.svg';
import './App.css';
import About from './Container/About'
import Profile from './Container/Profile';
import {useState} from 'react'
import {Link, Outlet} from 'react-router-dom' /* Routes, Route, */

function App() {
    return (
        <div className="App">

            
                <Link to='/about'>
                  <button>About</button>
                </Link>
            
            <br/>
        
            <Link to='/profile'>
                  <button>Profile</button>
                </Link>
            
            <Outlet/>
            
            {/* <Routes>              
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes> */}
        </div>
    );
}

export default App;
