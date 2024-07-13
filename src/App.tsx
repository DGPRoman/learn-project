import React, { useState } from 'react';
import './style.css'
import { HeaderWithCounter } from './page-parts/HeaderWithCounter';
import { Battlefield } from './page-parts/Battlefield';
import { ResetButton } from './page-parts/ResetButton';
import { useGameState } from './state/useGameState';

export default function App() {
    const {turn, reset, matrix, fire, won } = useGameState();

    return <div className='app'>
        <HeaderWithCounter turn={turn}></HeaderWithCounter>
        {won && <h2>You win!!!</h2>}
        <Battlefield matrix={matrix} onFire={fire}></Battlefield>
        <ResetButton reset={reset}></ResetButton>
    </div>;
};
