import React, {useState} from "react";
import {fetchMatches, sortMatches} from "./Api";
import MatchStatistics from "./MatchStatistics";

/*Renderes last 5 matches in givent tournament
and display last 5 sorted by date and play time*/

const ShowMatches = (props) =>{
    const tournamentID = props.tournament._tid;
    const [matches ,setMatches] = useState([])

    const getMatches = () =>{
        fetchMatches(tournamentID) // fetches matches for tournament by _tid
        .then((result) => {return sortMatches(result)})// sort matches by date and time and return las 5 macthes
        .then((result) => setMatches(result)) // showing the result
     }
      return <>
        <p><button className = 'btn btn-primary' type = 'button' onClick ={() => getMatches()} >show last 5 matches</button></p>
        {matches.map((match) =>{
        const {_id} = match;
        return <div key = {_id}>
        <MatchStatistics match = {match}/>
       </div>
    })}
   </>
}

export default ShowMatches;


