import React from 'react'
import VaderImage from '../assets/vader.png'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <img
      alt='This is a Vader, because Redux!'
      className='vader'
      src={VaderImage} />
    <h4>Welcome !</h4>
  </div>
)

export default HomeView
