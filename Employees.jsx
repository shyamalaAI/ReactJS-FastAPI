import React, { useEffect, useState } from 'react';
import api from "../api.js";
import AddEmployeeForm from './AddEmployeeForm';
import './EmployeeList.css';
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await api.get('/employees');
      setEmployees(response.data.employees);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  const addEmployee = async (empName, occupation) => {
    try {
      await api.post('/addEmployee', { name: empName, occupation });
      fetchEmployees();  // Refresh the list after adding an employee
    } catch (error) {
      console.error("Error adding employee", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="employee-container">
    <h2>Employee List</h2>
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.occupation}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <AddEmployeeForm addEmployee={addEmployee} />
  </div>
  

  );
};

export default EmployeeList;
