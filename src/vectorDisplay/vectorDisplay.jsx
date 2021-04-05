import React from 'react';
import vector from './vector.json';
import ElementsDisplay from './elementsDisplay/elementsDisplay';

export default function VectorDisplay() {

    const [vectorData, setVectorData] = React.useState(vector);

    const [newCardsNum, setNewCardsNum] = React.useState(0);

    const addCard = function () {
        
        let newVectorData = JSON.parse(JSON.stringify(vectorData));
        let newElementNum = newCardsNum+1;
        let newElement = { 
            "url": "https://placeimg.com/80/80/people?id="+(newElementNum+4), // 4 Is initial number of cards 
            "title": "New Card Title "+newElementNum, 
            "description":"Description of new image "+newElementNum
        };

        newVectorData.push(newElement);
        setVectorData(newVectorData);
        setNewCardsNum(newElementNum);
    }

    const deleteCard = function (index) {
        let newVectorData = JSON.parse(JSON.stringify(vectorData));
        newVectorData.splice(index, 1);
        setVectorData(newVectorData);
    }

    let vectorDisplay = (
            <ElementsDisplay value={vectorData} updateData={setVectorData} deleteCard={deleteCard}/>
        );

    let buttons = (
            <button className="addCard" onClick={addCard}>+ Add Card</button>
        );
   
    return (<div className="vectorDisplay">{vectorDisplay}{buttons}</div>);

}