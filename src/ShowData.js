import {fetchMatches, fetchTournaments} from "./Api";
import React, { useState, useEffect } from 'react';






const ShowData = () =>{

  const [tempResult ,setTempResult] = useState('')
//   useEffect(() =>{
//     fetchData().then((rawData) =>{
//       setTempResult(rawData)
//     })
//   }, []);

const show = () =>{
    fetchTournaments().then((res) => fetchMatches(res)).then((data) =>{
        setTempResult(data);
    })
}

  return <>
    <div>
       <button type ='button' onClick = {() =>show()}> get tournaments</button>
      <p>{tempResult}</p>
    </div>
    </>


}

export default ShowData;