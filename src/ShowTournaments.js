import {fetchTournaments} from "./Api";
import React, { useState, useEffect } from 'react';
import ShowMatches from "./ShowMatches";






const ShowTournaments = () =>{

const [tournaments ,setTournaments] = useState([])


const getTournaments = () =>{
    fetchTournaments().then((result) => {
    setTournaments(result)
  })
    
    
}

useEffect(() => {
  getTournaments();
}, []);

  return (
    <>
    
        {tournaments.map((tournament) => {
          const {_tid, name} = tournament 
          return (<div key ={_tid} style  = 
            {{
            backgroundColor: "lightblue", 
            textAlign: 'center', 
            border: '5px outset',
            height: 'auto', 
            display: "flex",
            flexDirection: "column",
            
            }}>
             {name}
                  <p><button type = 'button' >show last 5 matches</button></p>
                  <div > <ShowMatches tournament ={tournament}/></div>
            </div>)

        })}
    
    </>
  )
  
  }

export default ShowTournaments;