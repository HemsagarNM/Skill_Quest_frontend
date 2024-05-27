import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';
import Menu from './HomeMenu';
import Home from './Home';
import Result from './pages/ResultPage';
import Logout from './Logout';
import Lists from './pages/ListPage';
import FileUpload from './Upload';
import ResumeDetailsPage from './pages/ResumeDetails';
import About from './pages/About';
const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL)
const App = () => {
  const { currentRole } = useSelector(state => state.user);

  return (
    <Router>
      {currentRole === null &&
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

          <Route path="/login" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Applicant" />} />
          <Route path="/Teacherlogin" element={<LoginPage role="Recruiter" />} />

          <Route path="/Adminregister" element={<AdminRegisterPage />} />
          <Route path="/home" element={<Menu title= 'A Streamline Recruitment using Pre-Trained Transformers' tag = {<Home />} />} />
          <Route path='/Upload' element={<Menu title='Upload' tag={ <FileUpload /> } />} />
          <Route path='/Results' element={<Menu title ='Result' tag={<Result />}/>}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/list' element={<Menu title ='JOBS' tag={<Lists/>}/>}/>
          <Route path='/Results/:list_name' element={<Menu title ='Result' tag={<Result /> }/>}  />
          <Route path="/resume/:id" element={<ResumeDetailsPage />} />
          <Route path="/About" element={<About />} />
          {/* Component={Result} */}
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>}

      {currentRole === "Admin" &&
        <>
          <AdminDashboard />
        </>
      }

      {currentRole === "Student" &&
        <>
          <StudentDashboard />
        </>
      }

      {currentRole === "Teacher" &&
        <>
          <TeacherDashboard />
        </>
      }
    </Router>
  )
}

export default App