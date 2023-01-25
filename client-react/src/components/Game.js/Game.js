import './Game.scss'

import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chipFive, chipTen, chipTwenty, chipFifty, chipHundred } from "../../features/gamePlay/playerSlice";

import darkBlue from '../../assets/chips/5.png'
import grey from '../../assets/chips/10.png'
import green from '../../assets/chips/20.png'
import red from '../../assets/chips/50.png'
import purple from '../../assets/chips/100.png'


const Game = () => {

  const [toggleValue, setToggleValue] = useState(false);
  const chipCounter = useSelector((state) => state.playerChipCounter);
  const dispatch = useDispatch();


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
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipCounter.chipFive}</p>
                <img className='chips-bottom' src={darkBlue} alt="" onClick={() => dispatch(chipFive())} />
              </div>
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipCounter.chipTen}</p>
                <img className='chips-bottom' src={grey} alt="" onClick={() => dispatch(chipTen())} />
              </div>
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipCounter.chipTwenty}</p>
                <img className='chips-bottom' src={green} alt="" onClick={() => dispatch(chipTwenty())} />
              </div>
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipCounter.chipFifty}</p>
                <img className='chips-bottom' src={red} alt="" onClick={() => dispatch(chipFifty())} />
              </div>
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipCounter.chipHundred}</p>
                <img className='chips-bottom' src={purple} alt="" onClick={() => dispatch(chipHundred())} />
              </div>

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
