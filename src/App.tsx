import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ProfilePage } from './pages/ProfilePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PROFILES } from './constants';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/neha" element={<ProfilePage profile={PROFILES.neha} />} />
          <Route path="/arunabh" element={<ProfilePage profile={PROFILES.arunabh} />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
