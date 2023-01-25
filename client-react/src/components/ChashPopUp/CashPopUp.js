
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  chipFiveAdd,
  chipTenAdd,
  chipTwentyAdd,
  chipFiftyAdd,

} from "../../features/gamePlay/playerSlice";
import './CashPopUp.scss'
import imgbj from '../../assets/images/1470895f3b5a7c0e680efc78647dbe1f___Копие-removebg-preview.png'




const CashPopUp = ({ setisVisible }) => {

  const chipAdd = useSelector((state) => state.playerChipAdd);

  const dispatch = useDispatch();


  return (
    <div className="cash-pop-up">
      <div className="container-cp">
        <img src={imgbj} alt="" />
        <h3 className="cp-h">Initial Cash:</h3>
        <div className="btn-cont-popup">
          <button className="start-chips-btn" onClick={() => dispatch(chipFiveAdd(), setisVisible(false))}>Add 5 by each chips</button>
          <button className="start-chips-btn" onClick={() => dispatch(chipTenAdd(), setisVisible(false))}>Add 10 by each chips</button>
          <button className="start-chips-btn" onClick={() => dispatch(chipTwentyAdd(), setisVisible(false))}>Add 20 by each chips</button>
          <button className="start-chips-btn" onClick={() => dispatch(chipFiftyAdd(), setisVisible(false))}>Add 50 by each chips</button>
        </div>
      </div>

    </div>
  )
}

export default CashPopUp
