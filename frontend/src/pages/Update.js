import React, { useState } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import Header from '../components/Header';
function Update() {
  const [student_Id, setStudentID] = useState('');
  const [student_name, setStudentName] = useState('');
  const [birth_date, setBirthDate] = useState('');

  const handleUpdate = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:8080/users/'; 
    const user = {
      student_Id: student_Id,
      student_name: student_name,
      birth_date: {
        year: new Date(birth_date).getFullYear(),
        month: new Date(birth_date).getMonth() + 1,
        day: new Date(birth_date).getDate(),
      },
    };
  
    try {
      const response = await axios.put(url, user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert("You have updated successfully");
      console.log(response);
      
    }  catch (error) {
      alert("Invalid details");
      console.log('Response:', error.response);
      console.log('Response Data:', error.response.data);
     
    }
  
    // Reset the form after submission
    setStudentID('');
    setStudentName('');
    setBirthDate('');
  };
  
  return (
    <>
    <Header></Header>
  <section className="h-100 h-custom" class="random">
    <div className="container py-5 h-100" >
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
          <div className="card rounded-3">
            <div className="card-body p-4 p-md-5">
              <h3>Update Form</h3>
              <p>You can update your details by giving your Student Id</p>
              <form className="px-md-2">
                <div className="form-outline mb-4">

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="studentId" >Enter Your Student ID</label>
                  <input type="text" id="studentId" className="form-control" 
                  value={student_Id}
                  onChange={(event) => setStudentID(parseInt(event.target.value, 10))}
                   placeholder='Student Id'
                  required/>
                </div>
                <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" 
                  value={student_name}
                  onChange={(event) => setStudentName(event.target.value)} 
                   placeholder='Student Name' required/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="bdate">Birth Date</label>
                  <input type="date" id="bdate" className="form-control" 
                  value={birth_date}
                  onChange={(event) => setBirthDate(event.target.value)} required/>
                </div>
                <div class="d-grid gap-2">
                <button type="submit" class="btn" onClick={handleUpdate}>Update</button>
                </div>
                <Link to="/" className="text">
              Don't have an account?
            </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}

export default Update;
