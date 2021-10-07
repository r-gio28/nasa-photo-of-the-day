import React from "react";

export default function Body(props) {
    
    const {nasaData} = props;

    return (
        <div>
            <p>date: {nasaData.date}</p>
            <img src= {nasaData.url} alt='Astronomy pic of the day'/>
            <h2>{nasaData.title}</h2>
            <p>{nasaData.copyright}</p>
            <p>{nasaData.explanation}</p>
        </div>
        
    )
}