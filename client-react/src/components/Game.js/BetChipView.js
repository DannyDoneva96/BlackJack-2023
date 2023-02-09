import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    LastOneRemove, gameState,
} from "../../features/gamePlay/playerSlice";


const BetChipView = () => {

    const dispatch = useDispatch();
    const chipAdd = useSelector(gameState);

    let counter = 1

    return (
        <div className="chip-bet-fl-c" onClick={() => dispatch(LastOneRemove())}>

            {chipAdd.bet.map((x) => <img key={nanoid(5)} className="smallChipsBets" src={x}
                style={{ position: 'absolute', left: `${counter += 20}px` }} alt="" />

            )}

        </div>
    )
}

export default BetChipView
