import "./Trailer.css";
import React from 'react'
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player"; 


const Trailer = () => {
    let params=useParams();
    const key=params.ytTrailerId;
  return (
    <div className="react-player-container">
        {(key!=null)?<ReactPlayer control="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`} width="100%" height="100%"/>:null}


    </div>
  )
}

export default Trailer