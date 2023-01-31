import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    LastOneRemove, playerChips,
} from "../../features/gamePlay/playerSlice";

import singleFive from '../../assets/chips/dark-blue-chip – Копие.png'
import singleTen from '../../assets/chips/grey-chip – Копие.png'

const BetChipView = () => {

    const dispatch = useDispatch();
    const chipAdd = useSelector(playerChips);
    const [betsImages, setBetImages] = useState(chipAdd.bet.length>0? chipAdd.bet : [])
    
    

    // chipAdd.bet.forEach((bet) => {
    //     if (bet === 5) {
    //         
    //     } else if (bet === 10) {
    //         setBetImages(state => [...state, singleTen])
    //     }
    // })

    return (
        <div onClick={() => dispatch(LastOneRemove())}>
      
            {chipAdd.bet.map((x) => <img key={nanoid(5)} className="smallChipsBets" src={x} alt="" />
            )}

        </div>
    )
}

export default BetChipView
