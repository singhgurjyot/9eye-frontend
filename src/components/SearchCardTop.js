import React from 'react';
import "./SearchCardTop.scss";

function SearchCardTop(){
    return(
        <div className="SearchCardTop">
            <h1>Find a 9eye</h1>
            <div className="line">
                <input type="text"  placeholder="Location" />
                <button className="searchButton">Search</button>

            </div>
        </div>
    )
}

export default SearchCardTop;