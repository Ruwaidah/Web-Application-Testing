import React from 'react'

export const startvalue = {
    strike: 0,
    balls: 0
}
export default function Display(props) {
  
    return (
        <div>
            <div>
                <h1>Balls</h1>
                <p data-testid="number-display">{props.balls }</p>
            </div>
            <div>
                <h1>strikes </h1>
                <p>{props.strike}</p>
            </div>
        </div>
    )
}