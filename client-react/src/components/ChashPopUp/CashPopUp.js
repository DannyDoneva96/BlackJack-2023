
import React from 'react'
import { useDispatch } from 'react-redux';
import {
  chipFiveAdd,
  chipTenAdd,
  chipTwentyAdd,
  chipFiftyAdd,

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
          <button className="start-chips-btn" onClick={() => dispatch(chipFiveAdd(), setisVisible(state => false))}>Add 5 of each chips</button>
          <button className="start-chips-btn" onClick={() => dispatch(chipTenAdd(), setisVisible(state => false))}>Add 10 of each chips</button>
          <button className="start-chips-btn" onClick={() => dispatch(chipTwentyAdd(), setisVisible(state => false))}>Add 20 of each chips</button>
          <button className="start-chips-btn" onClick={() => dispatch(chipFiftyAdd(), setisVisible(state => false))}>Add 50 of each chips</button>
        </div>
      </div>

    </div>
  )
}
