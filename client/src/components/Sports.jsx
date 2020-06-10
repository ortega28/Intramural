import React from 'react'
import basketballImage from '../images/photo-1546519638-68e109498ffc.jpeg'
import soccerImage from '../images/photo-1551958219-acbc608c6377.jpeg'
import { Link } from 'react-router-dom'

function Sports() {
  return (
    <>
      <img src={basketballImage} alt="Basketball Image" />
      <Link to='/basketball'>Basketball</Link>
      <img src={soccerImage} alt="Soccer Image" />
      <Link to='/soccer'>Soccer</Link>
    </>
  )
}

export default Sports
