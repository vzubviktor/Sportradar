import axios from 'axios';

/*function to fetch data from api, from provided source code.
 Returns flattened  array of objects with property 'tournaments', with filtered keys
 that will be used to get list of  matches. Or cathes an Error */  

 export const fetchTournaments = () => {
  return axios.get('https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/config_tournaments/1/17')
  .then((response) => {
     const tournamentsArray = response.data.doc; 
     let tempArray  = tournamentsArray.map((obj) => obj.data.tournaments) // iterate over array and return tournaments
     tempArray = tempArray.reduce((a,b) => a.concat(b), []);              // flatten the array for comfortable use 
     tempArray = tempArray.map((obj) => {
       const {_tid, name, matches } = obj; 
       return {_tid : obj._tid, name : obj.name}                          // return only properties that sre need for further work  
     }) 
     return tempArray;
  })
  .catch((error) => console.log(error)) 
  };

  
  
  


  
  export const fetchMatches = (arrTournaments) =>{
    // console.log(arrTournaments);
    arrTournaments.forEach(tournament => {
     axios.get(`https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/${tournament._tid}/2021`)
    .then((response) =>{
     let tempArray = response.data.doc // return an array of object 
     let matchesArray  = tempArray.map((obj) => obj.data.matches) // iterates over array and getting object of with matches 
     console.log(matchesArray)
    // return JSON.stringify(matchesArray);
  }).
  catch((error) => console.log(error))
      
    });
    return 'arrTournaments';
};



  
