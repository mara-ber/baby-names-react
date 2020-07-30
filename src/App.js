import React from 'react';
import './App.css';
import Heading from './Heading.js';
import NamesSorted from './NamesSorted.js';
import SearchField from './SearchField.js';

function App() {
  return (
    <div className="App">
      <Heading />
      <SearchField />
      <NamesSorted />

    </div>
  );
}

export default App;
