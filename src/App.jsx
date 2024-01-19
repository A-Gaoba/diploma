import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/dashboard/Home";
import StudentPage from "./pages/students/Home";
import StudentProfile from "./pages/students/StudentPage";
import AddStudent from "./pages/students/AddStudent";
import TeacherPage from "./pages/teachers/Home";
import TeacherProfile from "./pages/teachers/TeacherPage";
import AddTeacher from "./pages/teachers/AddTeacher";
import Classes from "./pages/classes/Home";
import ClassInfo from "./pages/classes/ClassInfo";
import CreateClass from "./pages/classes/CreateClass";
import Subjects from "./pages/Subjects/Home";
import Attendance from "./pages/attendance/Home";
import Login from "./auth/Login";
import Logout from "./auth/Logout"; // Import the Logout component

const App = () => {
  const [isAdminAuthenticated, setAdminAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on component mount
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (isAuthenticated) {
      setAdminAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    // Set authentication status and save it to localStorage
    setAdminAuthenticated(true);
    localStorage.setItem("isAdminAuthenticated", "true");
  };

  const handleLogout = () => {
    // Clear authentication status from state and localStorage
    setAdminAuthenticated(false);
    localStorage.removeItem("isAdminAuthenticated");
  };

  return (
    <Router>
      <Routes>
        {isAdminAuthenticated ? (
          <Route path="/" element={<Layout onLogout={handleLogout} />}>
            <Route index element={<Dashboard />} />
            {/* student */}
            <Route path="/students" element={<StudentPage />} />
            <Route path="/students/:id" element={<StudentProfile />} />
            <Route path="/students/add" element={<AddStudent />} />
            {/* teacher */}
            <Route path="/teachers" element={<TeacherPage />} />
            <Route path="/teachers/:id" element={<TeacherProfile />} />
            <Route path="/teachers/add" element={< AddTeacher />} />

            {/* <Route path="/courses" element={<CoursePage />} /> */}
            {/* class */}
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/:id" element={<ClassInfo />} />
            <Route path="/classes/create" element={<CreateClass />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/attendance" element={<Attendance />} />
            {/* Include the Logout component */}
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          </Route>
        ) : (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        )}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
