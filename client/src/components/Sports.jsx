import React from 'react'
import basketballImage from '../images/photo-1546519638-68e109498ffc.jpeg'
import soccerImage from '../images/photo-1551958219-acbc608c6377.jpeg'
import { Link } from 'react-router-dom'
import './Sports.css'

function Sports() {
  return (
    <div className='sports-main-div'>
      <div className='sports-basketball-div'>
        <img src={basketballImage} alt="Basketball" className='sports-basketball-image' />
        <Link to='/teams' className='sports-basketball-link'>Basketball</Link>
      </div>
      <div className='sports-soccer-div'>
        <img src={soccerImage} alt="Soccer" className='sports-soccer-image' />
        <Link to='/soccer' className='sports-soccer-link'>Soccer</Link>
      </div>
    </div>
  )
}

export default Sports
