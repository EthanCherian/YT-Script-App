// import logo from './logo.svg';
import './App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import { Hit } from './components/Hit';
import styled from 'styled-components';
import Explore from './components/Explore';
import Home from './components/Home';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  renderMatches,
} from "react-router-dom";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-items: center;
  padding: lem 0;
`;

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
