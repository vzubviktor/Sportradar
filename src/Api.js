import axios from 'axios';

/*function to fetch data from api, from provided source code.
 Returns flattened  array of objects with property 'tournaments', with filtered keys
 that will be used to get list of  matches. Or cathes an Error */  

 export const fetchTournaments = async () => {
  return await axios.get('https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/config_tournaments/1/17')
  .then((response) => {
     const tournamentsArray = response.data.doc; 
     let tempArray  = tournamentsArray.map((obj) => {
       if(obj.data.tournaments){
         return obj.data.tournaments;// check if tournament exists
       }}) // iterate over array and return tournaments
     tempArray = tempArray.reduce((a,b) => a.concat(b), []);              // flatten the array for comfortable use 
     return tempArray ;
  })
  .catch((error) => console.log(error)) 
  };

  
   
  export const fetchMatches = (tournamentID) =>{
    return axios.get(`https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/${tournamentID}/2021`)
    .then((response) =>{
     let tempArray = response.data.doc // return an array of object 
     let matchesArray  = tempArray.map((obj) => {
       if(obj.data.matches){
         return obj.data.matches;// check if matches info exists
       }}) // iterates over array and getting object of with matches 
    return matchesArray
    }).
  catch((error) => console.log(error))
};


// This function takes date and time value from every match and 
// reassemble for proper construction of date object

const dateConstructor = (date, time ) =>{
  if(date && time) {
    const splitDate = date.split('/'); // spletinng the date
    const splitTime = time.split(':') // spliting the time 
    const year = Number(splitDate[2]) + 2000; //constructing a year 
    const month = Number(splitDate[1]) -1; // constructing month with 0 - index
    const day = Number(splitDate[0]); // CONSTRUCTING Day
    const hour = Number(splitTime[0]);
    const minute = Number (splitTime[1]);
    return new Date(year, month, day, hour, minute );
  }
}


// This function Sort matches by date and time 


export const sortMatches = (matchesArray) =>{
  // getting array of object 
  let matches = matchesArray.map(({...match}) =>{
    return Object.values(match)})
  matches =  matches.reduce((a,b) => a.concat(b), []);
  //sorting matches by date and time 
  matches = matches.sort((a, b) =>{ 
    let dateA = dateConstructor(a.time.date, a.time.time), // 
    dateB = dateConstructor(b.time.date, b.time.time);
    if (dateB < dateA) {
      return -1;
    } else {
      return 1;
    }
  });
  // filtering by today's date to get only matches that has been played
  const today = new Date();
  matches = matches.filter((match) =>{
      const matchDate =  dateConstructor(match.time.date, match.time.time);
      return matchDate < today
  })
  return matches.slice(0, 5) // return last 5 matches

}
  
