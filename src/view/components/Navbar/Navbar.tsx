// import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
// import { Button } from '../Button';
import './Navbar.scss'
import { BiSearch, BiUserCircle } from 'react-icons/bi';

import { Link } from 'react-router-dom';

interface NavbarProps {
    selectPage: string;
    signinText: string;
    signupText: string;
    signoutText: string;

    afterlogin: string;
}

const Navbar = ({ selectPage, signinText, signupText, signoutText, afterlogin } : NavbarProps) =>  {

  // state = { clicked: false }

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked })
  // }
    return (
      <nav className="NavbarItems">

        <Link to='/'><h1 className="navbar-logo">LOGO<i className="fab fa-react"></i></h1></Link>

        <div className='nav-menu'>
          {MenuItems.map((item, index) => {
            // if(item.url === "/Commu"){
            //   return (
            //     <li style={{backgroundColor: selectPage}}>
            //       <a className={item.cName} href={item.url}>{item.title}</a>
            //     </li>
            //   )
            // } else if(item.url === "/Work"){
            //   return (
            //     <li  style={{color: selectPage}}>
            //       <a className={item.cName} href={item.url}>{item.title}</a>
            //     </li>
            //   )
            // } else if(item.title === "Playlist"){
            //   return (
            //     <li style={{color: selectPage}}>
            //       <a className={item.cName}>{item.title}</a>
            //     </li>
            //   )
            // } else if(item.title === "Mypage"){
            //   return(
                
            //       <li key={index}>
            //         <a className={item.cName} href={item.url}>
            //           {item.title}
            //         </a>
            //       </li>
            //   )} 
            // else {
              return(
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            }
          )}
        </div>
        
        <div className='search-bar'>
          <input type="text" className='search-input' placeholder='search...' />
          <BiSearch className='search-icon' />
        </div>

        <div className='loginup'>
          <Link to='./signin'><h1 className='sign-in' style={{display: afterlogin}}>{signinText}</h1></Link>
          <Link to='./signup'><h1 className='sign-up' style={{display: afterlogin}}>{signupText}</h1></Link>
          <Link to='./'><h1 className='sign-out'>{signoutText}</h1></Link>
        </div>

        <div className='profile'>
          <Link to="./mypage"><BiUserCircle className='proimg'/></Link>
        </div>

        {/* <Button>Sign Up</Button> */}
    </nav>
    )
  }

export default Navbar;