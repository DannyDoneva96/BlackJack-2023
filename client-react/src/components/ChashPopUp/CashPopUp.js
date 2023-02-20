
import React from 'react'
import { useDispatch } from 'react-redux';
import {
  chipFiveAdd,
  chipTenAdd,
  chipTwentyAdd,
  chipFiftyAdd,
  playAudio

} from "../../features/gamePlay/playerSlice";
import './CashPopUp.scss'
import imgbj from '../../assets/images/1470895f3b5a7c0e680efc78647dbe1f___Копие-removebg-preview.png'


export default function CashPopUp({ setisVisible }) {



  const dispatch = useDispatch();

  return (
    <div className="cash-pop-up">
      <div className="container-cp">
        <img src={imgbj} alt="" />
        <h3 className="cp-h">Choose your initial cash:</h3>
        <div className="btn-cont-popup">
          <button className="start-chips-btn" onClick={() => [dispatch(playAudio()), dispatch(chipFiveAdd(), setisVisible(state => false))]}>500$</button>
          <button className="start-chips-btn" onClick={() => [dispatch(playAudio()), dispatch(chipTenAdd(), setisVisible(state => false))]}>1,000$</button>
          <button className="start-chips-btn" onClick={() => [dispatch(playAudio()), dispatch(chipTwentyAdd(), setisVisible(state => false))]}>2,000 $</button>
          <button className="start-chips-btn" onClick={() => [dispatch(playAudio()), dispatch(chipFiftyAdd(), setisVisible(state => false))]}>5,000$</button>
        </div>
      </div>

    </div>
  )
}
