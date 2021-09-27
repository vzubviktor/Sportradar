import {fetchTournaments} from "./Api";
import React, { useState, useEffect } from 'react';
import ShowMatches from "./ShowMatches";






const ShowTournaments = () =>{
const [tournaments ,setTournaments] = useState([])



useEffect(() => {
  let mounted = true
  const getTournaments = () =>{
    fetchTournaments().then((result) => {
    setTournaments(result)
  })
}
  getTournaments();
  return () => {mounted = false};
}, []);

  return (
    <>
    
        {tournaments.map((tournament) => {
          const {_tid, name} = tournament 
          return (<div key ={_tid}
            role = 'tournament' 
            id = {_tid}
            data-testid = {_tid} 
            style  = {{
            backgroundColor: "lightblue", 
            textAlign: 'center', 
            border: '5px outset',
            height: 'auto', 
            display: "flex",
            flexDirection: "column",
            
            }}>
             <div>{name}</div>
             <div > <ShowMatches tournament ={tournament}/></div>
            </div>)

        })}
    
    </>
  )
  
  }

export default ShowTournaments;