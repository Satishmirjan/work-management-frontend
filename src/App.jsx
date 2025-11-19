import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AddTaskPage from './pages/AddTaskPage.jsx';
import TaskListPage from './pages/TaskListPage.jsx';
import AnalyticsPage from './pages/AnalyticsPage.jsx';
import ManageOptionsPage from './pages/ManageOptionsPage.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  const location = useLocation();
  const mainClassName = location.pathname === '/' ? 'landing-main' : 'app-main';

  return (
    <div className="app-shell">
      <Navbar />
      <main className={mainClassName}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tasks/new" element={<AddTaskPage />} />
          <Route path="/tasks/:taskId/edit" element={<AddTaskPage />} />
          <Route path="/tasks" element={<TaskListPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/manage" element={<ManageOptionsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
