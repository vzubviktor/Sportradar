import { render, screen, container, cleanup, findByText } from '@testing-library/react';
import ShowTournaments from '../components/ShowTournaments';
import {fetchTournaments} from "../components/Api";
import React, { useState, useEffect } from 'react';
import ShowMatches from "../components/ShowMatches";
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowTournaments />, div);

});


