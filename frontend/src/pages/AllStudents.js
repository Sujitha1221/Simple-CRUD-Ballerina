import React, { useEffect, useState } from 'react';
import axios from 'axios';
function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/users/'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((students) => (
          <li key={students.student_Id}>{students.student_name}{students.birth_date}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
