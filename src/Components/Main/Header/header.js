import React from 'react'
import "./Header.css";
import Rate from "../../Rate";

const header = ({setSearchName,setSearchRate,searchRate}) => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Type movie name to search"
             onChange={(e) => setSearchName(e.target.value)}
            />
            <Rate rating={searchRate} setSearchRate={setSearchRate}/>
        </div>
    )
}

export default header
