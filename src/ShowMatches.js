import React, {useState, useEffect} from "react";
import {fetchMatches, sortMatches} from "./Api";
import ShowTournaments from "./ShowTournaments";


const ShowMatches = (props) =>{
    const tournamentID = props.tournament._tid;
    const [matches ,setMatches] = useState([])


    const getMatches = () =>{
        fetchMatches(tournamentID).then((result) => {return sortMatches(result)}).then((result) => {
        setMatches(result)
      })
        
        
    }
    
    useEffect(() => {
      getMatches();
    }, []);
    

    
    return <>
    {matches.map((match) =>{
        const {_id, comment, time, result, teams} = match;
        return <div>
        {match.time.date}, {match.time.time} {match.teams.home.name} VS {match.teams.away.name}
       </div>
    })}

    </>
}

export default ShowMatches;


