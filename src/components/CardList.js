import React from 'react';
import Card from './Card';


const CardList = ({restaurants}) => {
    const cardComponent = restaurants.map((user, i) => {
        return (
        <Card 
            key={restaurants[i].id}
            id={restaurants[i].id} 
            name={restaurants[i].name}
            doordash={restaurants[i].doordash} 
            ubereats={restaurants[i].ubereats}
            postmates={restaurants[i].postmates}
            grubhub={restaurants[i].grubhub}
        />
        );
    });
    return (
        <div>
            {cardComponent};
        </div>
    );
}

export default CardList;