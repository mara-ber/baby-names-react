import React from 'react';
import './App.css';
import Heading from './Heading.js';
import SearchField from './SearchField.js';
import FavoriteNames from './FavoriteNames.js'


function App() {
  return (
    <div className="App">
      <Heading />
      <SearchField />
      {/* <NamesSorted /> */}

    </div>
  );
}

export default App;
