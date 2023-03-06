import React, { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Filter onFilterChange={onFilterChange} />
      </header>
    </div>
  );
}

export default App;
