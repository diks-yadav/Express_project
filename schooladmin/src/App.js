import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import "./assets/css/style.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Attendance from './pages/Attendance';
import Home from './Home';

function App() {
  return (
  //  <>
  //  <Dashboard/>
  //  </>
  <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<Dashboard/>}>
    <Route index element={<Home/>}/>
    <Route path="student" element={<Attendance/>}/>
    <Route path="*" element={<Home/>}/>

    {/* student-attendance */}
    
    </Route>
    <Route path="/" element={<Login/>}></Route>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
