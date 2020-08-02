import React from 'react';
import './App.css';
import Heading from './Heading.js';
import NamesSorted from './NamesSorted.js';
import Search from './SearchField.js';

function App() {
  return (
    <div className="App">
      <Heading />
      <Search />
      {/* <NamesSorted /> */}

    </div>
  );
}

export default App;
