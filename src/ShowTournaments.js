import {fetchTournaments} from "./Api";
import React, { useState, useEffect } from 'react';
import ShowMatches from "./ShowMatches";

/*renders tournaments with given
URL as source link*/

const ShowTournaments = () =>{
const [tournaments ,setTournaments] = useState([])

useEffect(() => {
 
  const getTournaments = () =>{
    fetchTournaments().then((result) => {
    setTournaments(result)
  })
}
  getTournaments();
  
}, []);

  return (
    <>
      {tournaments.map((tournament) => {
        const {_tid, name} = tournament 
        return (<div key ={_tid}
          data-testid = 'tournament' 
          id = {_tid}
          className = 'container themed-container'>
            <div className = 'h4'>{name}</div>
            <div > <ShowMatches tournament ={tournament}/></div>
          </div>)
      })}
    </>
  )
  }

export default ShowTournaments;