import React from 'react';
import './App.css';
import EmployeeList from './components/Employees';

const App = () => {
  return (
    <div className="App">
      <header >
        <h1>Employee</h1>
      </header>
      <main>
        <EmployeeList />
      </main>
    </div>
  );
};

export default App;