import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import StudentPage from "./page/students/Home";
import TeacherPage from "./page/teachers/Home";
import Classes from "./page/classes/Home";
import Subjects from "./page/Subjects/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/students" element={<StudentPage />} />
          <Route path="/teachers" element={<TeacherPage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes" element={<Subjects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
