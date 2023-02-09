import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import React, { Suspense, lazy, useState, useEffect } from 'react'
import Countdown from 'react-countdown';

import './Game.scss'
import Loading from "../Loading/Loading";
import BetChipView from './BetChipView';
import Card from './Card';

import { getCardDeck } from '../../features/cardDeck/cardDeckSlice';

import {
  chipFiveRemove,
  chipTenRemove,
  chipTwentyRemove,
  chipFiftyRemove,
  chipHundredRemove,
  playerChips,
  LastOneRemove,
  getOneCard,
  getDealerCards,
  getPlayerCards,
} from "../../features/gamePlay/playerSlice";

import cardsBackSide from '../../assets/images/back-removebg-preview.png'
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


  // const [dealerCards, setDealerCards] = useState([{ image: cardsBackSide }, { image: cardsBackSide }]);
  // const [playerCards, setPlayerCards] = useState([{ image: cardsBackSide }, { image: cardsBackSide }]);
  // const [cardValues, setCardValues] = useState({
  //   dealerCardsTotalValue: 0,
  //   playerCardsTotalValue: 0
  // })

  const chipAdd = useSelector(playerChips);
  const cardDeck = useSelector(getCardDeck);
  const dispatch = useDispatch();

  // const getDealerCards = (cardDeck) => {
  //   let random1 = Math.floor(Math.random() * cardDeck.length)
  //   let random2 = Math.floor(Math.random() * cardDeck.length)
  //   if (random1 !== random2 &&
  //     random1 !== -1 &&
  //     random2 !== -1 &&
  //     random1 <= cardDeck.length &&
  //     random2 <= cardDeck.length) {

  //     let cards = [cardDeck[random1], cardDeck[random2]]
  //     setDealerCards(cards)
  //     let value = [cardDeck[random1], cardDeck[random2]]
  //       .reduce((acc, card) => {
  //         acc += card.value
  //         return acc
  //       }, 0)

  //     setCardValues(state => ({
  //       ...state,
  //       dealerCardsTotalValue: value
  //     }))

  //     return (cards, value)
  //   }
  // }
  // const getPlayerCards = (cardDeck) => {
  //   let random1 = Math.floor(Math.random() * cardDeck.length)
  //   let random2 = Math.floor(Math.random() * cardDeck.length)
  //   if (random1 !== random2 &&
  //     random1 !== -1 &&
  //     random2 !== -1 &&
  //     random1 <= cardDeck.length &&
  //     random2 <= cardDeck.length) {
  //     let cards = [cardDeck[random1], cardDeck[random2]]
  //     setPlayerCards(cards)
  //     let value = [cardDeck[random1], cardDeck[random2]]
  //       .reduce((acc, card) => {
  //         acc += card.value
  //         return acc
  //       }, 0)

  //     setCardValues(state => ({
  //       ...state,
  //       playerCardsTotalValue: value
  //     }))

  //     return (cards, value)
  //   }
  // }
  //  const onStand=()=>{
       
  //           while  (cardValues.dealerCardsTotalValue<=17){
  //           setDealerCards(prevState =>[ ...prevState, cardDeck[Math.floor(Math.random() * cardDeck.length)]]);
  //           setCardValues(state => ({
  //             ...state,
  //             dealerCardsTotalValue: dealerCards.reduce((a,card)=>  {  a+=Number(card.value); return a},0)
  //           }))
  //         }
  //  }



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
                {chipAdd.dealerCards.map(cardObject => <img key={cardObject.name} src={cardObject.image} className='card' alt='' />)}
                {/* <Card /> */}
              </div>
            </div>
            {chipAdd.total === 0
              ? <Countdown className='countDown'
                date={Date.now() + 15000}
              >
                {chipAdd.total === 0
                  ? <p>You Must place a bet!</p>
                  : <button onClick={() => [getDealerCards(chipAdd,cardDeck), getPlayerCards(chipAdd,cardDeck), setToggleValue(state => !state), setwhilePlaying(true)]} className='btn-play-game'>DEAL</button>
                }
              </Countdown>
              : <button onClick={() => [getDealerCards(chipAdd,cardDeck), getPlayerCards(chipAdd,cardDeck), setToggleValue(state => !state), setwhilePlaying(true)]} className='btn-play-game'>DEAL</button>}
            {whilePlaying
              ? <div className='game-options'>
                <button
                 onClick={() => getOneCard(chipAdd,cardDeck)} 
                
                > Hit</button>
                <div className='div-cont-bet'>
                  <p className='total'>{chipAdd.total}$</p>
                  <BetChipView />
                </div>
                <button >Stand</button>
              </div>
              : <div className='game-options'>
                <div className='div-cont-bet'>
                  <p className='total'>{chipAdd.total}$</p>
                  <BetChipView />
                </div>
              </div>}
            <div className='players-cards'>
              {chipAdd.playerCards.map(cardObject => <img key={cardObject.name} src={cardObject.image} className='card' alt='' />)}
              <p>{chipAdd.playerCardsValue}</p>
            </div>
          </section>
          {
            toggleValue
              ?

              <footer className="chips-container">
                <div className="chips">
                  <div>
                    <img id='single-blue' className={blueS} src={singleFive} alt="" />
                    <img className='chips-bottom' src={darkBlue} style={chipAdd.chipFive === 0 ? { display: "none" } : null} alt=""
                      onClick={() => [setBlue('smallActiveBlue'), setTimeout(dispatch, 1000, chipFiveRemove()), setTimeout(setBlue, 1000, 'small')]}
                    />
                  </div>
                  <div>
                    <img id='single-blue' className={greyS} src={singleTen} alt="" />
                    <img className='chips-bottom' src={grey} alt="" style={chipAdd.chipTen === 0 ? { display: "none" } : null} onClick={() => [setGrey('smallActiveGrey'), setTimeout(dispatch, 1000, chipTenRemove()), setTimeout(setGrey, 1000, 'small')]} />
                  </div>
                  <div>
                    <img id='single-blue' className={greenS} src={singleGreen} alt="" />
                    <img className='chips-bottom' src={green} alt="" style={chipAdd.chipTwenty === 0 ? { display: "none" } : null} onClick={() => [setGreen('smallActiveGreen'), setTimeout(dispatch, 1000, chipTwentyRemove()), setTimeout(setGreen, 1000, 'small')]} />
                  </div>
                  <div>
                    <img id='single-blue' className={redS} src={singleRed} alt="" />
                    <img className='chips-bottom' src={red} alt="" style={chipAdd.chipFifty === 0 ? { display: "none" } : null} onClick={() => [setRed('smallActiveRed'), setTimeout(dispatch, 1000, chipFiftyRemove()), setTimeout(setRed, 1000, 'small')]} />
                  </div>
                  <div>
                    <img id='single-blue' className={purpleS} src={singlePurple} alt="" />
                    <img className='chips-bottom' src={purple} alt="" style={chipAdd.chipHundred === 0 ? { display: "none" } : null} onClick={() => [setPurple('smallActivePurple'), setTimeout(dispatch, 1000, chipHundredRemove()), setTimeout(setPurple, 1000, 'small')]} />
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
