import React, { useState } from 'react';

const AddEmployeeForm = ({ addEmployee }) => {
  const [empName, setEmpName] = useState('');
  const [occupation, setOccupation] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (empName) {
      addEmployee(empName,occupation);
      setEmpName('');
      setOccupation('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={empName}
        onChange={(e) => setEmpName(e.target.value)}
        placeholder="Enter employee name"
      />
      <input
        type="text"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
        placeholder="Enter employee occupation"
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;