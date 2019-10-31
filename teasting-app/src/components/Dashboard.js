import React  from 'react'



export default function Dashboard(props) {


    return (
        <div>
            <button onClick = {props.changeStrike} >strike</button>
            <button onClick = {props.changeBalls} >balls</button>
            <button onClick = {props.changeFoul}>foul</button>
            <button onClick = {props.changeHit}>hit</button>
        </div>
    )
}