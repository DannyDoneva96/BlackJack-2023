import './Game.scss'
import darkBlue from '../../assets/chips/5.png'
import grey from '../../assets/chips/10.png'
import green from '../../assets/chips/20.png'
import red from '../../assets/chips/50.png'
import purple from '../../assets/chips/100.png'

import React from 'react'

const Game = () => {
  return (
    <div>
      <div className="block">

        <footer className="chips-container">
          <div className="chips">

            <img className='chips-bottom' src={darkBlue} alt="" />
            <img className='chips-bottom' src={grey} alt="" />
            <img className='chips-bottom' src={green} alt="" />
            <img className='chips-bottom' src={red} alt="" />
            <img className='chips-bottom' src={purple} alt="" />

          </div>
        </footer>
      </div>
    </div>
  )
}

export default Game
