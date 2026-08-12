import { HashRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import AdminLayout from "./layouts/AdminLayout"
import HomePage from "./pages/HomePage"
import EncyclopediaPage from "./pages/EncyclopediaPage"
import TimelinePage from "./pages/TimelinePage"
import MapPage from "./pages/MapPage"
import CoursesPage from "./pages/CoursesPage"
import QuizzesPage from "./pages/QuizzesPage"
import LeaderboardPage from "./pages/LeaderboardPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import AdminLoginPage from "./pages/admin/LoginPage"
import AdminDashboardPage from "./pages/admin/DashboardPage"
import AdminUsersPage from "./pages/admin/UsersPage"
import AdminCoursesPage from "./pages/admin/CoursesPage"
import AdminQuizzesPage from "./pages/admin/QuizzesPage"
import AdminOlympiadsPage from "./pages/admin/OlympiadsPage"
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
          <Route path="/quiz" element={<QuizzesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLoginPage />} />
          <Route index element={<AdminDashboardPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="courses" element={<AdminCoursesPage />} />
          <Route path="quizzes" element={<AdminQuizzesPage />} />
          <Route path="olympiads" element={<AdminOlympiadsPage />} />
          <Route path="resources" element={<AdminResourcesPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
