import React, {useState, useEffect} from "react";

// This is single match component widget.
// Used to displey name of the match that 
// has been played within the tournament and 
// offer short statistic upon the click


const MatchStatistics = (props) =>{
    const {_id, comment, time, result, teams} = props.match;
    const match = props.match;
    const [statistic, setStatistic] = useState('');
    const [title, setTitle] = useState('')
    const date = match.time.date;
    const playTime = match.time.time;
    const teamHome = match.teams.home.name;
    const teamAway = match.teams.away.name;
    const resultHome = match.result.home
    const resultAway = match.result.away

    
// setting the title
    const getTitle = (match) =>{
        setTitle(` Date : ${date}, ${teamHome}   ${resultHome}:${resultAway}   ${teamAway}, ${playTime}`)
    }
// showing the statistics when button clicked. Showing result and 
// Statistic component with proper comments. 
    const statistics = (match) =>{
        let events = match.comment.split(',');
        events = events.map((event) =>{
            return <div>{event}</div>
        })
        return events
     }
    
     useEffect (() =>{
        getTitle(match)
    }, [])

    return <>
    <div>
        <div>{title}</div>
        <div><button type ='button' onClick ={() => setStatistic(statistics(match))}>Click to see result</button></div>
        <div>{statistic}</div>
    </div>
   </>

}

export default MatchStatistics;