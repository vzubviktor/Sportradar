import axios from 'axios';
import {fetchTournaments, fetchMatches, dateConstructor} from "../components/Api";


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

// teisting fetchMatches function. Test is passed if we receieve correct
// ID of tournament, check if its number, fetches matches corresponding to tournament, 
// and check if they are valid objects

it('fetches matches from tournamentID and check if recieved value is correct', async () => {
    const result = await fetchTournaments()
    .then((res) => res.map((tournament) =>{
      expect(tournament).toBeTruthy()       // checking if we recieved some value 
     return tournament._tid
    }))
    .then((res) =>res.map((tournamentID) => {
      expect(typeof tournamentID).toBe('number') // checking if received value is a number
      fetchMatches(tournamentID)
      .then((res) => res.map((match) =>{
      expect(typeof match).toBe('object') // checking if received valid object
    }))
  }))
})

it('construct date object from string in dd/mm/yy and HH:MM format', () =>{
 const dateString = '25/12/17';
 const timeString = '15:00';
 let test = dateConstructor(dateString, timeString);
 let testString = test.toString()
 let matchString = 'Dec 25 2017 15:00:00'
 expect(testString.includes(matchString)).toBe(true);
 
}) 


 