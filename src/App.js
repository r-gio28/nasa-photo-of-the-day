import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY} from "./constants/index";
import axios from "axios";
import Body from "./Component/Body";

function App() {
  
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(resp => {
      console.log(resp);
      setNasaData(resp.data)
    }).catch(err => {
      console.error(err);
    })
  },[])

  return (
    <div className="App">
      <h1>
        Astronomy Picture of the Day!
      </h1>
      {nasaData && <Body nasaData={nasaData} />}
    </div>
  );
}

export default App;
