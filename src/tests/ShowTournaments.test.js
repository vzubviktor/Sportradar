import { render, screen, container, cleanup, findByText } from '@testing-library/react';
import ShowTournaments from '../ShowTournaments';
import {fetchTournaments} from "../Api";
import React, { useState, useEffect } from 'react';
import ShowMatches from "../ShowMatches";
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowTournaments />, div);

});

// it('check if  components recieve true values from source code', async () =>{
//   render(<ShowMatches tournament ={tournament}/>);
//   const listNode =   await screen.findAllByRole('tournament')
//    expect(listNode).toBeTruthy();
// });
