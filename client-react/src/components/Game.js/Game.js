import './Game.scss'
import CashPopUp from '../ChashPopUp/CashPopUp'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  chipFiveRemove,
  chipTenRemove,
  chipTwentyRemove,
  chipFiftyRemove,
  chipHundredRemove
} from "../../features/gamePlay/playerSlice";

import randomCard from "../../assets/cards/K/king of clubs.png"
import cardsBackSide from '../../assets/images/back-removebg-preview.png'
import darkBlue from '../../assets/chips/5.png'
import grey from '../../assets/chips/10.png'
import green from '../../assets/chips/20.png'
import red from '../../assets/chips/50.png'
import purple from '../../assets/chips/100.png'


const Game = () => {

  const [toggleValue, setToggleValue] = useState(false);
  const [isVisible, setisVisible] = useState(true);

  const chipAdd = useSelector((state) => state.playerChipAdd);
  const dispatch = useDispatch();

  useEffect(() => {


    let ifAny = false
    ifAny = Object.entries(chipAdd).some(chip => {
      if (chip[1] !== 0 && chip[1] !== undefined) {
        return true;
      }
    })
    if (ifAny) {
      setisVisible(false);
    }
  }, []);



  return (


    <div>
      {isVisible ? < CashPopUp setisVisible={setisVisible} /> : null}
      <div className={"block" + (isVisible ? 'active' : '')}>

        <button
          onClick={() => setToggleValue(state => !state)}
          className="btn-secondary">
          Show Bets
        </button>
        <section className="game-field">
          <div className='dealers-cards' >
            <div className="dealercardscontainer">
              {/* static version  */}
              <img className='card' src={cardsBackSide} alt="" />
              <img className='card' src={randomCard} alt="" />
            </div>
          </div>
          <div className='game-options'>
            <button>Hit</button>
            <button>Stand</button>

          </div>
          <div className='players-cards'>
            <img className='card' src={randomCard} alt="" />
            <img className='card' src={randomCard} alt="" />
          </div>
        </section>

        {toggleValue
          ?
          //TODO:
          // TRQBVA DA SE SLOJI LOGIKATA DOLU KOGATO SE ZALAGAT CHIPOVETE, BROIKATA DA NAMALQVA SPORED ZALOGA!
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
