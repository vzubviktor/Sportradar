import React, {useState, useEffect} from "react";

// This is single match component widget.
// Used to displey name of the match that 
// has been played within the tournament and 
// offer short statistic upon the click


const MatchStatistics = (props) =>{
    
    const match = props.match;
    const [statistic, setStatistic] = useState('');
    const [title, setTitle] = useState('')
    const date = match.time.date;
    const playTime = match.time.time;
    const teamHome = match.teams.home.name;
    const teamAway = match.teams.away.name;
    const resultHome = match.result.home;
    const resultAway = match.result.away;

    

    
// showing the statistics when button clicked. Showing result and 
// Statistic component with proper comments. 
    const statistics = (match) =>{
        const uniqueID = match._id;
        if (match.comment){
            let events = match.comment.split(',');
            events = events.map((event) =>{
            return <div key = {uniqueID + event}>{event}</div>
        });
        return events;
        }
        else {return <div className = 'unknown'> Info Not Available</div>};
     }
    
     useEffect (() =>{
        const getTitle = () =>{
        setTitle(` Date : ${date}, ${teamHome}   ${resultHome}:${resultAway}   ${teamAway}, ${playTime}`)
        };
        getTitle();

    },[date, playTime, resultAway,resultHome, teamAway, teamHome]);

    return <>
    <div>
        <div className = 'h5'>{title}</div>
        <div><button className = 'btn btn-secondary' type ='button' onClick ={() => setStatistic(statistics(match))}>Click to see who scored</button></div>
        <div className = 'h6'>{statistic}</div>
    </div>
   </>;

};

export default MatchStatistics;