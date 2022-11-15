import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //React-Router import
import './styles/App.scss';

import Mainpage from './view/pages/Mainpage';
import CommuPage from './view/pages/CommuPage';
import WorkPage from './view/pages/WorkPage';
import PlaylistPage from './view/pages/PlaylistPage';
import MypagePage from './view/pages/MypagePage';
import Signin from './view/pages/Signin';
import Signup from './view/pages/Signup';
import UserPage from './view/pages/UserPage';
import Poster from './view/pages/Poster';
import PlaylistList from './view/pages/PlaylistList';

import Navbar from './view/components/Navbar/Navbar';





class App extends Component {
  render() {
    return(
      <div>
        
        <Router>
          <Navbar selectPage={'red'} signinText="Sign in" signupText="Sign up" signoutText="" afterlogin='inline-block'/>
          <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/commu" element={<CommuPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/playlist" element={<PlaylistPage />} />
              <Route path="/mypage" element={<MypagePage />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/poster" element={<Poster />} />
              <Route path="/playlistList" element={<PlaylistList/>} />
          </Routes>
        </Router>
          
        
      </div>
    )
  }
}

export default  App;
