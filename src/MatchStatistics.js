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
    
// setting the title
    const getTitle = (match) =>{
        const date = match.time.date;
        const playTime = match.time.time;
        const teamHome = match.teams.home.name;
        const teamAway = match.teams.away.name;
        setTitle(` Date : ${date}, ${teamHome} vs ${teamAway}, ${playTime}`)
    }
// showing the statistics when button clicked 
    const statistics = (match) =>{
        const result = match.result.home + ':' + match.result.away;
        const comment = match.comment;
        return <div>
            <p>{result}</p>
            <p>{comment}</p>
        </div>
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