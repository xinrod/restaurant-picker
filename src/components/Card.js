import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
            <div>
                <img src={`https://robohash.org/${props.id}?200x200`}  alt={`${props.name}`} width='200' height='200'/>
                <div>
                    <h2>{props.name}</h2>
                    <p>DoorDash: ${props.doordash}</p>
                    <p>UberEats: ${props.ubereats}</p>
                    <p>Postmates: ${props.postmates}</p>
                    <p>GrubHub: ${props.grubhub}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;