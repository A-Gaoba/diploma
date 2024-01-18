import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/dashboard/Home";
import StudentPage from "./pages/students/Home";
import StudentProfile from "./pages/students/StudentPage";
import AddStudent from "./pages/students/AddStudent";
import TeacherPage from "./pages/teachers/Home";
import TeacherProfile from "./pages/teachers/TeacherPage";
import Classes from "./pages/classes/Home";
import ClassInfo from "./pages/classes/ClassInfo";
import CreateClass from "./pages/classes/CreateClass";
import Subjects from "./pages/Subjects/Home";
import Attendece from "./pages/attendance/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* student */}
          <Route path="/students" element={<StudentPage />} />
          <Route path="/students/:id" element={<StudentProfile />} />
          <Route path="/students/add" element={<AddStudent />} />
          {/* teacher */}
          <Route path="/teachers" element={<TeacherPage />} />
          <Route path="/teachers/:id" element={<TeacherProfile />} />
          {/* classes */}
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:id" element={<ClassInfo />} />
          <Route path="/classes/create" element={<CreateClass />} />
          {/* subjects */}
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/attendance" element={<Attendece />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
