import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import React, { Suspense, lazy, useState } from 'react'

import './Game.scss'
import Loading from "../Loading/Loading";
import BetChipView from './BetChipView';

import { getCardDeck } from '../../features/cardDeck/cardDeckSlice';
import {
  chipFiveRemove,
  chipTenRemove,
  chipTwentyRemove,
  chipFiftyRemove,
  chipHundredRemove,
  playerChips,
  LastOneRemove
} from "../../features/gamePlay/playerSlice";

import randomCard from "../../assets/cards/K/king of clubs.png"
import cardsBackSide from '../../assets/images/back-removebg-preview.png'
import darkBlue from '../../assets/chips/5.png'
import grey from '../../assets/chips/10.png'
import green from '../../assets/chips/20.png'
import red from '../../assets/chips/50.png'
import purple from '../../assets/chips/100.png'


import singleFive from '../../assets/chips/dark-blue-chip – Копие.png'
import singleTen from '../../assets/chips/grey-chip – Копие.png'
import singleGreen from '../../assets/chips/green-chip – Копие.png'

const CardComponent = lazy(() => import("./CardDeckComp.js"));
const CashPopUp = lazy(() => import("../ChashPopUp/CashPopUp.js"));


const Game = () => {

  const [toggleValue, setToggleValue] = useState(true);
  const [isVisible, setisVisible] = useState(true);
  const [blueS, setBlue] = useState('small');
  const [greyS, setGrey] = useState('small');
  const [greenS, setGreen] = useState('small');




  const chipAdd = useSelector(playerChips);
  const cardDeck = useSelector(getCardDeck);
  const dispatch = useDispatch();



  return (
    <div>

      <div className="block">

        <button
          onClick={() => setToggleValue(state => !state)}
          className="btn-secondary">
          Show Bets
        </button>

        <Suspense fallback={<Loading />}>

          {isVisible && !chipAdd.hasChips
            ?
            <CashPopUp setisVisible={setisVisible} />
            : null
          }
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
              {/* TODO: here must be an image of chip and on click to remove the last chip */}
              <div className='div-cont-bet'>

                <BetChipView />

              </div>

              <button>Stand</button>

            </div>
            <div className='players-cards'>
              <img className='card' src={randomCard} alt="" />
              <img className='card' src={randomCard} alt="" />
            </div>
          </section>

          {/* {cardDeck?.map((card, i) => (
            i < 1
              ?
              <CardComponent key={nanoid(52)} card={card} />
              : null
          ))} */}

          {
            toggleValue
              ?
              //TODO:
              // TRQBVA DA SE SLOJI LOGIKATA DOLU KOGATO SE ZALAGAT CHIPOVETE, BROIKATA DA NAMALQVA SPORED ZALOGA!
              <footer className="chips-container">
                <div className="chips">

                {/* TODO:
                DA OBSUDIM: Dali da ne napravim razlichen klas za vseki cvqt i suotvetno v animaciqta razlichni koordinati za premestvane */}
                  <div>

                    <img id='single-blue' className={blueS} src={singleFive} alt="" />

                    <img className='chips-bottom' src={darkBlue} style={chipAdd.chipFive === 0 ? { display: "none" } : null} alt=""
                      onClick={() => [setBlue('smallActive'), setTimeout(dispatch, 1000, chipFiveRemove()), setTimeout(setBlue, 1000, 'small')]}
                    />

                  </div>
                  <div>
                    <img id='single-blue' className={greyS} src={singleTen} alt="" />

                    <img className='chips-bottom' src={grey} alt="" style={chipAdd.chipTen === 0 ? { display: "none" } : null} onClick={() => [setGrey('smallActive'), setTimeout(dispatch, 1000, chipTenRemove()), setTimeout(setGrey, 1000, 'small')]} />
                  </div>
                  <div>
                  <img id='single-blue' className={greenS} src={singleGreen} alt="" />

                    <img className='chips-bottom' src={green} alt="" style={chipAdd.chipTwenty === 0 ? { display: "none" } : null} onClick={() => [setGreen('smallActive'), setTimeout(dispatch, 1000, chipTwentyRemove()), setTimeout(setGreen, 1000, 'small')]} />
                  </div>
                  <div>
                    <img className='chips-bottom' src={red} alt="" style={chipAdd.chipFifty === 0 ? { display: "none" } : null} onClick={() => dispatch(chipFiftyRemove())} />
                  </div>
                  <div>
                    <img className='chips-bottom' src={purple} alt="" style={chipAdd.chipHundred === 0 ? { display: "none" } : null} onClick={() => dispatch(chipHundredRemove())} />
                  </div>

                </div>
              </footer>
              :
              null
          }

        </Suspense>

      </div >
      <button className="btn-main-menu">

        <Link to="/" className="link-home">MAIN MENU</Link>

      </button>
    </div >
  )
}

export default Game
