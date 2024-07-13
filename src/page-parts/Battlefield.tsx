import * as React from 'react';
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from '../state/cellState';
import styles from './battlefield.module.css';

type CellProps = {
    value: number,
    handleClick: (y: number, x: number) => void;
    x: number;
    y: number;
};

const cellStateMap: any = {
    [WATER]: '',
    [SHIP]: '',
    [CHECKED_WATER]: '*',
    [CHECKED_SHIP]: 'X',
}

const Cell = ({ handleClick, value, x, y}: CellProps) => {
    return <button onClick={() => handleClick(x, y)} className='cell'>{cellStateMap[value]}</button>;
};

type BattlefieldProps = {
    matrix: number[][];
    onFire: (y: number, x: number) => void;
};

export const Battlefield = ({ matrix, onFire }: BattlefieldProps) => {
    return (
        <div className={styles.main}>
            {matrix.map((line, lineNumber) => (
                <div key={lineNumber} className='line'>
                    {line.map((v, i) => (
                        <Cell 
                        key={`${lineNumber}${i}`} 
                        value={v} 
                        x={i} 
                        y={lineNumber} 
                        handleClick={onFire}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
