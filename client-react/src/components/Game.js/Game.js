import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
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
  getOneCard,
  getOneDealerCard,
  getDealerCards,
  getPlayerCards,
  nextGame,
  isBJPlayer,
  isBJDealer,
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


// const CardComponent = lazy(() => import("./Card.js"));
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
  const [isOver, setIsOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const intervalId = useRef(null);

  const chipAdd = useSelector(gameState);
  const cardDeck = useSelector(getCardDeck);
  const dispatch = useDispatch();
  // TO DO FOR THE WHOLE FILE!
  // NEED TO FIX THE CONDITIONS FOR WINNING AND LOSING. AFTER THE DEALER GET THE CARDS IF "STAND" IS PRESSED, THE FINAL RESULT MUST BE DISPLAYED

  useEffect(() => {

    if (isStanding && isOver) {
      if (chipAdd.dealerCardsValue > 17) { return setIsOver(state => false) }
      intervalId.current = setInterval(() => {
        dispatch(getOneDealerCard(cardDeck));
      }, 1000);
    }

    return () => {
      clearInterval(intervalId.current);
    }

  }, [chipAdd.dealerCardsValue, isStanding]);



  function startGame() {
    dispatch(getDealerCards(cardDeck));
    dispatch(getPlayerCards(cardDeck));
    setIsOver(state => false);
    setIsStanding(state => false);
    setToggleValue(state => !state);
    setwhilePlaying(state => true);
  }


  function playAgain() {
    setBlue(state => "small");
    setGrey(state => "small");
    setGreen(state => "small");
    setRed(state => "small");
    setPurple(state => "small");
    startGame();
    dispatch(nextGame());
    setwhilePlaying(state => false);

  }

  return (
    <div>
      <div className="block">


        <Suspense fallback={<Loading />}>
          {isVisible && !chipAdd.hasChips
            ?
            <CashPopUp setisVisible={setisVisible} />
            : null
          }
          <section className="game-field">
            <div className='dealers-cards' >
              <div className="dealercardscontainer">
                {chipAdd.dealerCards.map
                  (cardObject =>
                    <img key={nanoid(15)}
                      src={cardObject.image}
                      className='card' alt=''
                    />)}
              </div>
              <p className='counter-cards'>{chipAdd.dealerCardsValue}</p>

            </div>

            {chipAdd.total === 0
              ?
              <>
                <p>You Must place a bet!</p>
                <Countdown className='countDown'
                  date={Date.now() + 13000}
                />
              </>
              :
              whilePlaying
                ?
                null
                :
                <button
                  onClick={() => [
                    startGame()
                  ]} className='btn-play-game'>
                  DEAL
                </button>
            }
            {
              whilePlaying //if playing the game
                ?
                (chipAdd.isBJPlayer === true && chipAdd.isBJDealer === false)// if the player has BJ 
                  ?
                  <>
                    <p>BlackJasck! </p> {/*the player wins*/}
                    <p>You win {chipAdd.total + chipAdd.total / 2}$ !</p>
                    <button onClick={() =>
                      [playAgain(), setToggleValue(state => true)]}>PLAY AGAIN!</button>

                  </>

                  :
                  (chipAdd.isBJDealer === true && chipAdd.isBJPlayer === false)// if the dealer has BJ
                    ?
                    <>
                      <p>Dealer Wins!</p> {/*the player loses*/}
                      <button onClick={() =>
                        [playAgain(), setToggleValue(state => true)]}>PLAY AGAIN!</button>

                    </>
                    :
                    chipAdd.dealerCardsValue > 21
                      ?

                      <p>You win {chipAdd.total}$ !</p>

                      :
                      chipAdd.playerCardsValue > 21//if the player has more than 21 points
                        ?
                        <div>
                          <p>Dealer Wins!</p>
                        </div>
                        :
                        chipAdd.dealerCardsValue === chipAdd.playerCardsValue
                          ?
                          <>
                            <p>STAY!</p>
                            <button onClick={() =>
                              [playAgain(), setToggleValue(state => true)]}>PLAY AGAIN!</button>

                          </>
                          :
                          (chipAdd.dealerCardsValue >= 17 && chipAdd.dealerCardsValue < chipAdd.playerCardsValue)
                            ?
                            <>
                              <p>You win {chipAdd.total}$ !</p>
                              <button onClick={() =>
                                [playAgain(), setToggleValue(state => true)]}>PLAY AGAIN!</button>
                            </>
                            :
                            (!isOver && isStanding)
                              ?
                              <>

                                <p>{chipAdd.dealerCardsValue > chipAdd.playerCardsValue ? "Dealer wins!" : "You win!"}</p>
                                <button onClick={() =>
                                  [playAgain(), setToggleValue(state => true)]}>PLAY AGAIN!</button>
                              </>
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
                                <button onClick={() => [chipAdd.dealerCardsValue < 17 ? [setIsStanding(state => true), setIsOver(state => true)] : null]}>
                                  Stand
                                </button>
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
              <p className='counter-cards abs'>{chipAdd.playerCardsValue}</p>
            </div>
          </section>
          {
            (chipAdd.playerCardsValue >= 21 || chipAdd.dealerCardsValue >= 21)
              ?
              <>
                <button onClick={() =>
                  [playAgain(), setToggleValue(state => true)]}>PLAY AGAIN!</button>
              </>
              : null
          }
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
                      style={chipAdd.initialCash < 5 ? { display: "none" } : null}
                      alt=""
                      onClick={() => [
                        setBlue('smallActiveBlue'),
                        setTimeout(() => { dispatch(chipFiveRemove()); }, 300),
                        setTimeout(() => { setBlue("small") }, 300)]}
                    />
                  </div>
                  <div>
                    <img id='single-blue' className={greyS} src={singleTen} alt="" />
                    <img
                      className='chips-bottom'
                      src={grey} alt=""
                      style={chipAdd.initialCash < 10 ? { display: "none" } : null}
                      onClick={() => [
                        setGrey('smallActiveGrey'),
                        setTimeout(() => { dispatch(chipTenRemove()) }, 300),
                        setTimeout(() => { setGrey("small") }, 300)]}
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
                      style={chipAdd.initialCash < 20 ? { display: "none" } : null}
                      onClick={() => [
                        setGreen('smallActiveGreen'),
                        setTimeout(dispatch, 300, chipTwentyRemove()),
                        setTimeout(() => { setGreen("small") }, 300)]}
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
                      style={chipAdd.initialCash < 50 ? { display: "none" } : null}
                      onClick={() => [
                        setRed('smallActiveRed'),
                        setTimeout(() => { dispatch(chipFiftyRemove()) }, 300),
                        setTimeout(() => { setRed("small") }, 300)]}
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
                      style={chipAdd.initialCash < 100 ? { display: "none" } : null}
                      onClick={() => [
                        setPurple('smallActivePurple'),
                        setTimeout(dispatch, 300, chipHundredRemove()),
                        setTimeout(() => { setPurple("small") }, 300)]}
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
