import axios from 'axios';
import {fetchTournaments, fetchMatches} from "../Api";


 // testing fetchTournaments() to receive an array of objects
 // from source API that conatin tournament objects

  it('fetches successfully array from API', async () => {
    const result = await fetchTournaments()
    .then((res) => expect(res instanceof Array).toBe(true))
  })
 
// testing fetchTournaments() to receive Non empty of objects
 // from source API that conatin tournament objects

 it('check if fetched array non empty', async () => {
    const result = await fetchTournaments()
    .then((res) => expect(res.length !== 0).toBe(true))
  })


 it('fetches matches from tournamentID andcheck if they in array', async () => {
    const result = await fetchTournaments()
    .then((res) => res.map((tournament) =>{
      expect(tournament).toBeTruthy()       // checking if we recieved some value 
     return tournament._tid
    }))
    .then((res) =>res.map((tournamentID) => {
      console.log(tournamentID);
      expect(typeof tournamentID).toBe('number') // checking if received value is a number
      fetchMatches(tournamentID)
      .then((res) => res.map((match) =>{
      expect(typeof match).toBe('object') // checking if received valid object
    }))
  }))
    
  })

 