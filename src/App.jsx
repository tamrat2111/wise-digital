import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import TeamMembersPage from './pages/TeamMembersPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  const isTeamMembersPage = window.location.pathname === '/team-members';
  const isProjectDetailsPage = /^\/projects\/\d+$/.test(window.location.pathname);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          {isTeamMembersPage ? <TeamMembersPage /> : isProjectDetailsPage ? <ProjectDetailsPage /> : <Layout />}
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;