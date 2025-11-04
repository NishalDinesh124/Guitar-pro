import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './Auth/AdminLogin';
import LinksPage from './Pages/Admin/LinksPage';
import AdminUserAccess from './Pages/Admin/AdminUserAccessPage';
import ViewPages from './Pages/Admin/viewPages';
import AllUsers from './Pages/Admin/AllUsers';
import AllTeachers from './Pages/Admin/AllTeachers';
import UserLoginPage from './Auth/UserLogin';
import UserHome from './Pages/Home';
import TeacherLoginPage from './Auth/TeacherLogin';
import Player from './Pages/Player';
import ChordPage from './Pages/ChordPage';
import { ToastContainer } from 'react-toastify';
import styled, { ThemeProvider } from 'styled-components';
import TeacherHome from './Pages/Teacher/TeacherHome';
import Lessons from './Pages/Teacher/Lessons';
import ScalesPage from './Pages/ScalesPage';


function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/admin" element={<ViewPages toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/admin-login" element={<AuthPage toggleTheme={toggleTheme} themeMode={themeMode} />} />
            {/* <Route path="/admin-register" element={<RegisterPage toggleTheme={toggleTheme} themeMode={themeMode} />} /> */} 
            <Route
              path="/admin/view-links"
              element={<LinksPage toggleTheme={toggleTheme} themeMode={themeMode} />}
            />
            <Route
              path="/admin/all-users"
              element={<AllUsers toggleTheme={toggleTheme} themeMode={themeMode} />}
            />
            <Route
              path="/admin/all-teachers"
              element={<AllTeachers toggleTheme={toggleTheme} themeMode={themeMode} />}
            />
            <Route path="/admin/all-users/:pageId" element={<AdminUserAccess toggleTheme={toggleTheme} themeMode={themeMode} />} />

            <Route path="/" element={<UserHome toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/user-login" element={<UserLoginPage toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/player/:id" element={<Player toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/chords" element={<ChordPage toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/scales" element={<ScalesPage toggleTheme={toggleTheme} themeMode={themeMode} />} />

            <Route path="/teacher" element={<TeacherHome toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/teacher/lessons" element={<Lessons toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/teacher-login" element={<TeacherLoginPage toggleTheme={toggleTheme} themeMode={themeMode} />} />

          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  font-family: Inter;
  overflow: auto;
  width: 100vw;
  font-family: Inter;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding: 0em 0em;
  justify-content: center;
`;

const lightTheme = {
  background: "#eef2f6", // subtle blue-gray, modern clean look
  text: "#1b1b1b", // dark neutral
  fretText: "#ffffff",
  loginBg: "#d9e8ff", // soft sky blue
  cardBg: "#ffffff", // bright cards for clarity
  cardBorder: "#cfd8dc", // light gray-blue border
  inputBg: "#f6f9fc",
  placeholder: "#9aa0a6",
  heading: "#0047ab", // electric blue heading
  buttonBg: "#005eff", // strong blue accent
  buttonText: "#ffffff",
  buttonHover: "#336fff", // slightly lighter hover blue
  watermark: "#0000001f",
  sidebarBg: "#11366d5c",
  playerBg: "#f2f6fb",
};

const darkTheme = {
  background: "#0e0f1a", // deep navy-black
  text: "#f5f7fa",
  fretText: "#000000",
  loginBg: "#1a1b29",
  cardBg: "#1e2030", // slightly lighter panels
  cardBorder: "#2c2f40",
  inputBg: "#25283b",
  placeholder: "#9da3b3",
  heading: "#4f9cff", // neon electric blue
  buttonBg: "#2979ff",
  buttonText: "#ffffff",
  buttonHover: "#3d8aff",
  watermark: "#ffffff1a",
  sidebarBg: "#1b1d2b",
  playerBg: "#25283b",
};


