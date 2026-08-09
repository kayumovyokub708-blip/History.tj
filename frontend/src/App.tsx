import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import AdminLayout from "./layouts/AdminLayout"
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import CountriesPage from "./pages/CountriesPage"
import ResourcesPage from "./pages/ResourcesPage"
import QuizzesPage from "./pages/QuizzesPage"
import OlympiadsPage from "./pages/OlympiadsPage"
import LeaderboardPage from "./pages/LeaderboardPage"
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
    <BrowserRouter>
      <Routes>
        {/* Public site */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/olympiads" element={<OlympiadsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Route>

        {/* Admin */}
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
    </BrowserRouter>
  )
}

export default App
