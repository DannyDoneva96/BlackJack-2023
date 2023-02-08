import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    LastOneRemove, playerChips,
} from "../../features/gamePlay/playerSlice";


const BetChipView = () => {

    const dispatch = useDispatch();
    const chipAdd = useSelector(playerChips);

    let counter = 1

    return (
        <div className="chip-bet-fl-c"  onClick={() => dispatch(LastOneRemove())}>
            
            {chipAdd.bet.map((x) =><img key={nanoid(5)} className="smallChipsBets" src={x} 
             style={{position:'absolute',left:`${counter+=20}px`}} alt="" />

            )}
              
        </div>
    )
}

export default BetChipView
