import React from 'react';

const Card = (props) => {
    let moneySignDD = "";
    let moneySignUE = "";
    let moneySignP = "";
    let moneySignGH = "";

    if (!isNaN(props.doordash)) {
        moneySignDD = "$";
    }
    if (!isNaN(props.ubereats)) {
        moneySignUE = "$";
    }
    if (!isNaN(props.postmates)) {
        moneySignP = "$";
    }
    if (!isNaN(props.grubhub)) {
        moneySignGH = "$";
    }
    return (
        <a href={props.link} className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow5 nostyle'>
            <div>
                <img src={`https://robohash.org/${props.id}?200x200`}  alt={`${props.name}`} width='200' height='200'/>
                <div>
                    <h2>{props.name}</h2>
                    <p>DoorDash: {moneySignDD + props.doordash}</p>
                    <p>UberEats: {moneySignUE + props.ubereats}</p>
                    <p>Postmates: {moneySignP + props.postmates}</p>
                    <p>GrubHub: {moneySignGH + props.grubhub}</p>
                </div>
            </div>
        </a >
        

    );
}

export default Card;