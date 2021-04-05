import React from 'react';

export default function ElementsDisplay(props) {

    const vectorData = props.value;

    const updateElementTitle = function (newTitle, index) {
        let updatedVector = JSON.parse(JSON.stringify(vectorData));
        updatedVector[index].title = newTitle;
        console.log(newTitle);
        props.updateData(updatedVector);
    }

    const updateElementDesc = function (newDesc, index) {
        let updatedVector = JSON.parse(JSON.stringify(vectorData));
        updatedVector[index].description = newDesc;
        console.log(newDesc);
        props.updateData(updatedVector);
    }
    
    let vectorJsx = vectorData.map((element, index) => {
        return (
        <div className = "outter">
            <button title="Delete card" onClick={() => props.deleteCard(index)}>X</button>
            <img src={element.url} alt="Not able to display"/>
            <aside>
                <input className = "title" type="text" value={element.title} onChange={(e) => {updateElementTitle(e.target.value, index)}} />
                <input className = "description" type="text" value={element.description} onChange={(e) => {updateElementDesc(e.target.value, index)}}/>
            </aside>
        </div>);
    });
    
    return (<>{vectorJsx}</>);

}