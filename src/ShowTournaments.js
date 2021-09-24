import {fetchMatches, fetchTournaments} from "./Api";
import React, { useState, useEffect } from 'react';






const ShowTournaments = () =>{

const [tournaments ,setTournaments] = useState([])


const getTournaments = () =>{
    fetchTournaments().then((result) => {
    setTournaments(result)
    console.log(result)
  })
    
    
}

useEffect(() => {
  getTournaments();
}, []);

  return (
    <>
    <ul>
        {tournaments.map((tournament) => {
          const {_tid, name} = tournament
          return <li key = {_tid}> {name}</li>
        })}
    </ul>
    </>
  )
  
  }

export default ShowTournaments;