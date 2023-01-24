import './Game.scss'
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

import darkBlue from '../../assets/chips/5.png'
import grey from '../../assets/chips/10.png'
import green from '../../assets/chips/20.png'
import red from '../../assets/chips/50.png'
import purple from '../../assets/chips/100.png'



const Game = () => {

  const [toggleValue, setToggleValue] = useState(false);

  return (
    <div>


      <div className="block">

        <button
          onClick={() => setToggleValue(state => !state)}
          class="btn-secondary">
          Show Bets
        </button>
        {toggleValue
          ?
          <footer className="chips-container">
            <div className="chips">

              <img className='chips-bottom' src={darkBlue} alt="" />
              <img className='chips-bottom' src={grey} alt="" />
              <img className='chips-bottom' src={green} alt="" />
              <img className='chips-bottom' src={red} alt="" />
              <img className='chips-bottom' src={purple} alt="" />

            </div>
          </footer>
          :
          null
        }
      </div>
      <button className="btn-main-menu">
        <Link to="/" className="link-home">MAIN MENU</Link>
      </button>
    </div>
  )
}

export default Game
