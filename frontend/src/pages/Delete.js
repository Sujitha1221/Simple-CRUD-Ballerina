import React, { useState } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import Header from '../components/Header';
function Delete() {
  const [student_Id, setStudentID] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:8080/users/'; 
  
    try {
      const response = await axios.delete(url, student_Id, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert("You have deleted successfully");
      console.log(response);
      
    }  catch (error) {
      alert("Invalid details");
      console.log('Response:', error.response);
      console.log('Response Data:', error.response.data);
     
    }
  
    // Reset the form after submission
    setStudentID('');
  };
  
  return (
    <>
    <Header></Header>
  <section className="h-100" class="random">
    <div className="container py-5 h-100" >
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
          <div className="card rounded-3">
            <div className="card-body p-4 p-md-5">
              <h3>Deletion Form</h3>
              <p>You can delete your account by giving your Student Id</p>
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
                </div>
                <div class="d-grid gap-2">
                <button type="submit" class="btn" onClick={handleDelete}>Delete</button>
                </div>
                <Link to="/update" className="text">
              Want to update your details?
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

export default Delete;
