import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import React, { Suspense, lazy, useState } from 'react'
import Countdown from 'react-countdown';

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
  gameState,
  LastOneRemove,
  getOneCard,
  getOneDealerCard,
  getDealerCards,
  getPlayerCards,
} from "../../features/gamePlay/playerSlice";


import darkBlue from '../../assets/chips/5.png'
import grey from '../../assets/chips/10.png'
import green from '../../assets/chips/20.png'
import red from '../../assets/chips/50.png'
import purple from '../../assets/chips/100.png'


import singleFive from '../../assets/chips/dark-blue-chip – Копие.png'
import singleTen from '../../assets/chips/grey-chip – Копие.png'
import singleGreen from '../../assets/chips/green-chip – Копие.png'
import singleRed from '../../assets/chips/red-chip-removebg-preview – Копие.png'
import singlePurple from '../../assets/chips/purple-chip – Копие.png'

const CardComponent = lazy(() => import("./Card.js"));
const CashPopUp = lazy(() => import("../ChashPopUp/CashPopUp.js"));

const Game = () => {

  const [toggleValue, setToggleValue] = useState(true);
  const [isVisible, setisVisible] = useState(true);
  const [blueS, setBlue] = useState('small');
  const [greyS, setGrey] = useState('small');
  const [greenS, setGreen] = useState('small');
  const [redS, setRed] = useState('small');
  const [purpleS, setPurple] = useState('small');
  const [whilePlaying, setwhilePlaying] = useState(false);
  const [isStanding, setIsStanding] = useState(false);

  const chipAdd = useSelector(gameState);
  const cardDeck = useSelector(getCardDeck);
  const dispatch = useDispatch();

  // TO DO- MAKE THIS TO RETURN THE UPDATED STATE FROM THE dealerCardsValue - seems it returns the initial amount only!!!
  const drawDealerCard = () => {
    if (isStanding) {
      dispatch(getOneDealerCard(cardDeck))
      console.log(chipAdd.dealerCardsValue);
    }
    return (setInterval(() => {

      console.log('✅ getting a card for dealer');
      if (chipAdd.dealerCardsValue > 17) { return }
      setIsStanding(state => true);
      dispatch(getOneDealerCard(cardDeck));

    }, 1500),
      clearInterval()
    );
  }


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
                <p>{chipAdd.dealerCardsValue}</p>
                {chipAdd.dealerCards.map
                  (cardObject =>
                    <img key={nanoid(15)}
                      src={cardObject.image}
                      className='card' alt=''
                    />)}
              </div>
            </div>

            {chipAdd.total === 0
              ?
              <>
                <p>You Must place a bet!</p>
                <Countdown className='countDown'
                  date={Date.now() + 15000}
                />
              </>
              :
              whilePlaying
                ?
                null
                :
                <button
                  onClick={() => [
                    dispatch(getDealerCards(cardDeck)),
                    dispatch(getPlayerCards(cardDeck)),
                    setToggleValue(state => !state),
                    setwhilePlaying(true)
                  ]} className='btn-play-game'>
                  DEAL
                </button>
            }
            {
              whilePlaying
                ?
                chipAdd.playerCardsValue === 21
                  ?
                  <p>You have reached 21 points!</p>
                  :
                  chipAdd.playerCardsValue > 21
                    ?
                    <div>
                      <p>You lose! You have {chipAdd.playerCardsValue} points!</p>
                      <p>Better luck next time!</p>
                    </div>
                    :
                    // TODO: CLEAR THE RESULTS AND RESET THE GAME!
                    <div className='game-options'>
                      <button
                        onClick={() => dispatch(getOneCard(cardDeck))}>
                        Hit
                      </button>
                      <div className='div-cont-bet'>
                        <p className='total'>{chipAdd.total}$</p>
                        <BetChipView />
                      </div>
                      {/* TO DO BUTTON STAND LOGIC */}
                      <button onClick={() => chipAdd.dealerCardsValue <= 17 ? [setIsStanding(state => true), drawDealerCard()] : null}>Stand</button>
                    </div>
                :
                <div className='game-options'>
                  <div className='div-cont-bet'>
                    <p className='total'>{chipAdd.total}$</p>
                    <BetChipView />
                  </div>
                </div>
            }
            <div className='players-cards'>
              {chipAdd.playerCards.map(
                cardObject =>
                  <img key={nanoid(15)}
                    src={cardObject.image}
                    className='card'
                    alt=''
                  />)}
              <p>{chipAdd.playerCardsValue}</p>
            </div>
          </section>
          {
            toggleValue
              ?
              <footer className="chips-container">
                <div className="chips">
                  <div>
                    <img
                      id='single-blue'
                      className={blueS}
                      src={singleFive}
                      alt=""
                    />
                    <img
                      className='chips-bottom'
                      src={darkBlue}
                      style={chipAdd.chipFive === 0 ? { display: "none" } : null}
                      alt=""
                      onClick={() => [
                        setBlue('smallActiveBlue'),
                        setTimeout(dispatch, 1000, chipFiveRemove()),
                        setTimeout(setBlue, 1000, 'small')]}
                    />
                  </div>
                  <div>
                    <img id='single-blue' className={greyS} src={singleTen} alt="" />
                    <img
                      className='chips-bottom'
                      src={grey} alt=""
                      style={chipAdd.chipTen === 0 ? { display: "none" } : null}
                      onClick={() => [
                        setGrey('smallActiveGrey'),
                        setTimeout(dispatch, 1000, chipTenRemove()),
                        setTimeout(setGrey, 1000, 'small')]}
                    />
                  </div>
                  <div>
                    <img
                      id='single-blue'
                      className={greenS}
                      src={singleGreen}
                      alt=""
                    />
                    <img
                      className='chips-bottom'
                      src={green}
                      alt=""
                      style={chipAdd.chipTwenty === 0 ? { display: "none" } : null}
                      onClick={() => [
                        setGreen('smallActiveGreen'),
                        setTimeout(dispatch, 1000, chipTwentyRemove()),
                        setTimeout(setGreen, 1000, 'small')]}
                    />
                  </div>
                  <div>
                    <img
                      id='single-blue'
                      className={redS}
                      src={singleRed}
                      alt=""
                    />
                    <img
                      className='chips-bottom'
                      src={red} alt=""
                      style={chipAdd.chipFifty === 0 ? { display: "none" } : null}
                      onClick={() => [
                        setRed('smallActiveRed'),
                        setTimeout(dispatch, 1000, chipFiftyRemove()),
                        setTimeout(setRed, 1000, 'small')]}
                    />
                  </div>
                  <div>
                    <img
                      id='single-blue'
                      className={purpleS}
                      src={singlePurple}
                      alt="" />
                    <img
                      className='chips-bottom'
                      src={purple}
                      alt=""
                      style={chipAdd.chipHundred === 0 ? { display: "none" } : null}
                      onClick={() => [
                        setPurple('smallActivePurple'),
                        setTimeout(dispatch, 1000, chipHundredRemove()),
                        setTimeout(setPurple, 1000, 'small')]}
                    />
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
