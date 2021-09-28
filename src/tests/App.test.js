import { render, cleanup,  screen, container } from '@testing-library/react';
import App from '../App';
import React from 'react';
import ReactDOM from 'react-dom';
import ShowTournaments from '../ShowTournaments';
import { act } from 'react-dom/test-utils';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);})

 
  
// This test ensures that something renders from initial
// source code by checking if rendered element has Test Id tournament


    


it('check if  components recieve true values from source code', async () =>{
  render(<App />);
  const listNode =   await screen.findAllByTestId('tournament')
   expect(listNode).toBeTruthy();
});


 
  


