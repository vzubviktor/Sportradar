import React, {useState, useEffect} from "react";
import {fetchMatches} from "./Api";
import ShowTournaments from "./ShowTournaments";


const ShowMatches = (props) =>{
    const tournamentID = props.tournament._tid;
    const [matches ,setMatches] = useState([])


    const getMatches = () =>{
        fetchMatches(tournamentID).then((result) => {
        setMatches(result)
        console.log(result)
      })
        
        
    }
    
    useEffect(() => {
      getMatches();
    }, []);
    

    
    return <>
    {matches.map(({...match}) =>{
       
        const matchData = Object.values(match);
       return matchData.map((match) =>{
            return<div >{match.time.date} at {match.time.time}match teams: {match.teams.away.name} VS {match.teams.home.name}</div>
        })
    })}

    </>
}

export default ShowMatches;


