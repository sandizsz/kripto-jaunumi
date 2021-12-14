import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import Coin from "./components/coinItem/Coin";



function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
        
      })
      .catch((error) => console.error(error));
  }, []);




  const handleChange = (e) => {
    

    setSearch(e.target.value);

  };

  const cancelCourse = () => { 
    document.getElementById("crypto-search-form").reset();
    setSearch("");
  
  }



  return (
    <div>
      <div className="header">
     
        <div className="logoContainer" onClick={cancelCourse}>
        <img className="mainLogo" src="./logo.png" alt="logo" />
        <h1 className="brand">
          crypto<i>lv</i>
        </h1>
        </div>
        <form id="crypto-search-form" action="javascript:void(0);">
        <div className="search-box-container">
        <input placeholder='Meklēt valūtu...' className='js-search' onChange={handleChange} type="text"/>
        <i className="fa fa-search"></i>
      </div>
        </form>
      </div>

            <div className="coinsContainer">
   
            <Coin
              key={coins.id}
              name={coins.name}
              price={coins.current_price}
              symbol={coins.symbol}
              marketcap={coins.market_cap}
              volume={coins.total_volume}
              image={coins.image}
              priceChange={coins.price_change_percentage_24h}
            />
        
            </div>
    </div>
  );
}

export default App;
