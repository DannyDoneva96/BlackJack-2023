import './Game.scss'

import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  chipFiveAdd,
  chipTenAdd,
  chipTwentyAdd,
  chipFiftyAdd,
  chipFiveRemove,
  chipTenRemove,
  chipTwentyRemove,
  chipFiftyRemove,
  chipHundredRemove
} from "../../features/gamePlay/playerSlice";

import darkBlue from '../../assets/chips/5.png'
import grey from '../../assets/chips/10.png'
import green from '../../assets/chips/20.png'
import red from '../../assets/chips/50.png'
import purple from '../../assets/chips/100.png'


const Game = () => {

  const [toggleValue, setToggleValue] = useState(false);
  const chipAdd = useSelector((state) => state.playerChipAdd);
  const dispatch = useDispatch();


  return (
    <div>
      <div className="block">

        <button
          onClick={() => setToggleValue(state => !state)}
          className="btn-secondary">
          Show Bets
        </button>
        <button
          onClick={() => dispatch(chipFiveAdd())}
          className="btn-secondary">
          Add five of each chips
        </button>
        <button
          onClick={() => dispatch(chipTenAdd())}
          className="btn-secondary">
          Add ten of each chips
        </button>
        <button
          onClick={() => dispatch(chipTwentyAdd())}
          className="btn-secondary">
          Add twenty of each chips
        </button>
        <button
          onClick={() => dispatch(chipFiftyAdd())}
          className="btn-secondary">
          Add fifty of each chips
        </button>
        {toggleValue
          ?
          <footer className="chips-container">
            <div className="chips">
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipAdd.chipFive}</p>
                <img className='chips-bottom' src={darkBlue} alt="" onClick={() => dispatch(chipFiveRemove())} />
              </div>
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipAdd.chipTen}</p>
                <img className='chips-bottom' src={grey} alt="" onClick={() => dispatch(chipTenRemove())} />
              </div>
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipAdd.chipTwenty}</p>
                <img className='chips-bottom' src={green} alt="" onClick={() => dispatch(chipTwentyRemove())} />
              </div>
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipAdd.chipFifty}</p>
                <img className='chips-bottom' src={red} alt="" onClick={() => dispatch(chipFiftyRemove())} />
              </div>
              <div>
                <p className="chip-count" style={{ color: "white" }}>{chipAdd.chipHundred}</p>
                <img className='chips-bottom' src={purple} alt="" onClick={() => dispatch(chipHundredRemove())} />
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
