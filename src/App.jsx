import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import Tasks from './pages/Tasks';
import Timer from './pages/Timer';
import Calendar from './pages/Calendar';
import Notes from './pages/Notes';
import StudyRooms from './pages/StudyRooms';
import BionicReading from './pages/BionicReading';
import Quiz from './pages/Quiz';
import Flashcards from './pages/Flashcards';
import Shop from './pages/Shop';
import Profile from './pages/Profile';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const theme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Box>
                    <Navbar toggleSidebar={toggleSidebar} />
                    <Router>
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        {isSidebarOpen && <Sidebar />}
                        <Box sx={{ ml: isSidebarOpen ? 30 : 0, mt: 8, transition: 'margin-left 0.3s' }}>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/tasks" element={<Tasks />} />
                            <Route path="/timer" element={<Timer />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/notes" element={<Notes />} />
                            <Route path="/study-rooms" element={<StudyRooms />} />
                            <Route path="/bionic-reading" element={<BionicReading />} />
                            <Route path="/quiz" element={<Quiz />} />
                            <Route path="/flashcards" element={<Flashcards />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                        </Box>
                        <Feed />
                    </Stack>
                    </Router>
                </Box>

            </CssBaseline>
        </ThemeProvider>
    );
};

export default App;
