import React, { useState } from "react";
import axios from "axios";

import styles from "./vaccine.module.css";

function App() {
  const [vaccines, setVaccine] = useState([])
  const [query, setQuery] = useState()


function handleKeydown(e)
{

      console.log('do validate');
      setQuery(e.target.value);
    
}

const fetchData = async () => {

const pincode=query;
console.log(pincode);
      var today = new Date(), 
      date = today.getDate()+'-'+(today.getMonth() + 1)+'-'+today.getFullYear();

      const url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+pincode+"&date="+date;
      console.log(url);
      try{
    const response = await axios.get(url);
    console.log(response.data);
    setVaccine(response.data.sessions);
      }
      catch(err)
      {
        alert("No vaccines available");
      }
    }

return (
     
    <div className={styles.App}>
      <div className={styles.inputArea}>
      <h1 className={styles.heading}>Vaccine Near me 💉💉</h1>
      {/* Fetch data from API */}
      <div>
      <input
        type="text"
        className={styles.field}
        placeholder="Enter a pincode"
        onChange={handleKeydown}
      />
      <button className={styles.fetchbutton} onClick={fetchData}>
          FIND
        </button>
        <br />
      </div>
      </div>

   
      <div className={styles.vaccines}>
        {vaccines &&
          vaccines.map((v, index) => {
            return (
              <div className= {styles.vaccine} key={index}>
                <h3 className={styles.h1}>Hospital Name:- {v.name}</h3>
                <h2 className={styles.h1}>Address:- {v.address}</h2>

                <div className={styles.details}>
                  <p className={styles.details}>Vaccine Name: {v.vaccine}</p>
                  <p className={styles.details}>Date Of Vaccination: {v.date}</p>
                  <p className={styles.details}>Minimum Age Limit: {v.min_age_limit}</p>
                  <p className={styles.details}>Available Capacity : {v.available_capacity}</p>
                  <p className={styles.details}>Block Name: {v.block_name}</p>
                  <p className={styles.details}>District Name: {v.district_name}</p>
                  <p className={styles.details}>Available Slots : {v.slots.join(" | ")}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;


