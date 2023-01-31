import React from 'react';
import {Link} from 'react-router-dom'
import './landing.css'
import wallpaper from '../../foundations/wallpaper.mp4'
import { useDispatch } from 'react-redux';
import {getCountries} from '../../redux/actions'
import { useEffect } from 'react';



export const LandingPage = ()=>{
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCountries());

  },[dispatch])


return (
   <div className='main-container-landing'> 
                <video className ='main-video' src={wallpaper} autoPlay loop muted />
     <div className='container-title'> 
      <div className='main-title'>
        <h1 className ='main-h1'>Welcome to Countries App</h1>
      </div>
      </div>
      <Link exact to = "/home">
      <div className='main-button'>
        <button className='button-1'> Enter Site!</button>
      </div>
      </Link>
   </div>
)
}




