import * as React from "react"
import { useState } from 'react';
import '/src/css/global.css';
import '/src/css/animations.css';
import InfoPage from "../components/weather_info";


// markup
const IndexPage = () => {
  
  //state holding user input and passing it to api url
  const [miasto,setMiasto]=useState("London");
  //state as array with weather data from api that we are sending down to "InfoPage" component
  const [dane,setDane]=useState("pusto");
  const [errorr,setErrorr]=useState("git")
  
  //onClick event for submit button fetching API and placing it in "dane" state
  function Jazda(){
  const req = new XMLHttpRequest();
  req.open("GET",'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+miasto+'?key=KBNPTBXL22U65BEEQ2HGJ6QDZ',true);
  req.send();
  req.onload = function(){
    if (req.status !== 200) { //2
      console.log("XMLHttpRequest error: "+req.status);
      setErrorr("niegit");
      return;
    }
    else
    {console.log("działa")}
    const json=JSON.parse(req.responseText)
    console.log(json)
    setDane([json.currentConditions.temp,json.currentConditions.humidity,json.currentConditions.cloudcover,json.currentConditions.pressure,json.currentConditions.windspeed,json.days[1].precipprob])
    return;
    };
  }

 //onChange event for user input modifying state with it s value
  function ustawMiasto(event)
  {
    setMiasto(event.target.value)
  }

//onClick event on info page to return to city choice
  function restart()
  {
    setDane("pusto")
    setErrorr("git")
  }

  //render depending on if we fetched weather data or not
  if(dane==="pusto")
  {
  return (
    <div className="flex flex-col  bg-gray-dark font-mono text-white text-base h-screen overflow-hidden place-content-center">
      <div className="text-center  text-3xl mb-10">All I need is a city name....</div>
      <div className="text-center  text-xl">To see current weather info</div>
      <div className=" anim text-center  text-xl mb-10">type the name of a city in a grey field below</div>
      <input  className="rounded-md self-center border-2 border-gray-dark bg-gray text-gray-dark text-center text-xl w-1/4 mb-5 pt-2 pb-2 hover:border-gray" type="text" value={miasto} onChange={ustawMiasto}></input>
      <button className="border-2 border-gray rounded-md  w-1/6 self-center hover:bg-gray" onClick={Jazda}>Enter</button>
      {errorr==="niegit" && <div className="text-center text-red text-xl mt-10">Incorrect city name, try again</div>}
    </div>
  )
  }
  else
  {
    return <InfoPage restart={restart} miasto={miasto} dane={dane}/>
  }
  
}

export default IndexPage
