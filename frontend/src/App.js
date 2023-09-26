import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import StudentList from "./pages/AllStudents";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/update" element={<Update/>} />
        <Route path="/del" element={<Delete/>} />
        <Route path="/all" element={<StudentList/>} />
      </Routes>
    </Router>
  );
}

export default App;