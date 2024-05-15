import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Attendance from "./pages/Attendance";
import Home from "./Home";
import Test from "./pages/Test";
import StudyMaterial from "./pages/StudyMaterial";
import FacultyFeddback from "./pages/FacultyFeddback";
import StudentDocumentation from "./pages/StudentDocumentation";
import NoPage from "./pages/NoPage";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="student" element={<Attendance />} />
          <Route path="student-test" element={<Test />} />
          <Route path="study-material" element={<StudyMaterial />} />
          <Route path="faculty-feedback" element={<FacultyFeddback />} />
          <Route
            path="student-documentation"
            element={<StudentDocumentation />}
          />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="*" element={<NoPage />} />

          {/* student-attendance */}
        </Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
