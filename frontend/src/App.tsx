import { HashRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import AdminLayout from "./layouts/AdminLayout"
import HomePage from "./pages/HomePage"
import EncyclopediaPage from "./pages/EncyclopediaPage"
import TimelinePage from "./pages/TimelinePage"
import MapPage from "./pages/MapPage"
import CoursesPage from "./pages/CoursesPage"
import QuizzesPage from "./pages/QuizzesPage"
import ExpeditionsPage from "./pages/ExpeditionsPage"
import LeaderboardPage from "./pages/LeaderboardPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import NotFoundPage from "./pages/NotFoundPage"
import AdminLoginPage from "./pages/admin/LoginPage"
import AdminDashboardPage from "./pages/admin/DashboardPage"
import AdminUsersPage from "./pages/admin/UsersPage"
import AdminCoursesPage from "./pages/admin/CoursesPage"
import AdminQuizzesPage from "./pages/admin/QuizzesPage"
import AdminExpeditionsPage from "./pages/admin/ExpeditionsPage"
import AdminResourcesPage from "./pages/admin/ResourcesPage"
import AdminSettingsPage from "./pages/admin/SettingsPage"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/encyclopedia" element={<EncyclopediaPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/quiz" element={<QuizzesPage />} />
          <Route path="/expeditions" element={<ExpeditionsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLoginPage />} />
          <Route index element={<AdminDashboardPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="courses" element={<AdminCoursesPage />} />
          <Route path="quizzes" element={<AdminQuizzesPage />} />
          <Route path="expeditions" element={<AdminExpeditionsPage />} />
          <Route path="resources" element={<AdminResourcesPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
