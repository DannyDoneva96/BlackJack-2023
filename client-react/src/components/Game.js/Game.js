import './Game.scss'
import darkBlue from '../../assets/chips/dark-blue-chip.png'
import grey from '../../assets/chips/grey-chip.png'
import green from '../../assets/chips/green-chip.png'
import red from '../../assets/chips/red-chip-removebg-preview.png'
import purple from '../../assets/chips/purple-chip.png'

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
