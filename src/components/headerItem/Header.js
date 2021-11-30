import React from 'react'
import { useEffect, useState } from "react";

function Header() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
    

        setSearch(e.target.value);
    
      };
    
      const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );

    return (
        <div>
            <div className="header">
                <div className="logoContainer">
                    <img className="mainLogo" src="./logo.png" alt="logo" />
                    <h1 className="brand">cryptolv</h1>
                </div>

                <form>
                    <div className="search-box-container">
                    <input placeholder='Meklēt valūtu...' className='js-search' onChange={handleChange} type="text"/>
                    <i className="fa fa-search"></i>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header
