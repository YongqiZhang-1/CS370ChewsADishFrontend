import React from 'react';
import '../../App.css';
import { useEffect, useState } from "react";

import Hero from "../userpage/Hero/Hero";
import Projects from "../userpage/Projects/Projects";
import { Link } from 'react-router-dom';
import useFetch from '../useFetch';
import {useCookies} from 'react-cookie';
import { useHistory } from "react-router";



const UserPage = () => {
  const [Cookies, setCookie, removeCookie] = useCookies();
  const userName = Cookies.userName;
  const email = Cookies.email;
  const level = Cookies.level;
  const _id = Cookies._id;
  const userInfo = {userName, email, level, _id};
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCookie('userName', 'undefined', { path:'/'});
    history.push('/Login');
  }

/*
  useEffect(() => {
      fetch('http://localhost:3456/api/verify/login')
          .then(res => {
              return res.json();
          })
          .then(data => {
              setuserInfo(data);
          })
  }, []);
  */
 /*
 const [userName, setUserName] = useState(null);
 const [email, setEmail] = useState(null);
 const [_id, set_id] = useState(null);
    setUserName(Cookies.userName);
    setEmail(Cookies.email);
    set_id(Cookies._id);
    setuserInfo({userName,email,_id});
    */


  return (
    <>
      { userInfo.userName != 'undefined' && <div>
                  <button onClick={handleSubmit}>Log out</button>
                  <Hero userInfo =  {userInfo}/> 
                  
                  </div>}
      { userInfo.userName == 'undefined' && <div className='center'>
                                              <br/>
                                              <h2>Please Login</h2>
                                              <br/>
                                              <br/>
                                              <br/>
                      <Link to='Login'><button className='homebutton'>Log In</button></Link></div>}
</> 
  );
}

export default UserPage;