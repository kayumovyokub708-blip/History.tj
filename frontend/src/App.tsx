import { HashRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import AdminLayout from "./layouts/AdminLayout"
import HomePage from "./pages/HomePage"
import EncyclopediaPage from "./pages/EncyclopediaPage"
import PeoplePage from "./pages/PeoplePage"
import PersonPage from "./pages/PersonPage"
import EventsPage from "./pages/EventsPage"
import EventPage from "./pages/EventPage"
import TimelinePage from "./pages/TimelinePage"
import MapPage from "./pages/MapPage"
import CoursesPage from "./pages/CoursesPage"
import QuizzesPage from "./pages/QuizzesPage"
import QuizPlayPage from "./pages/QuizPlayPage"
import ExpeditionsPage from "./pages/ExpeditionsPage"
import LeaderboardPage from "./pages/LeaderboardPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import NotFoundPage from "./pages/NotFoundPage"
import AdminLoginPage from "./pages/admin/LoginPage"
import AdminDashboardPage from "./pages/admin/DashboardPage"
import AdminUsersPage from "./pages/admin/UsersPage"
import AdminPeoplePage from "./pages/admin/PeoplePage"
import AdminEventsPage from "./pages/admin/EventsPage"
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
          <Route path="/encyclopedia/people" element={<PeoplePage />} />
          <Route path="/encyclopedia/people/:slug" element={<PersonPage />} />
          <Route path="/encyclopedia/events" element={<EventsPage />} />
          <Route path="/encyclopedia/events/:slug" element={<EventPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/quiz" element={<QuizzesPage />} />
          <Route path="/quiz/:slug" element={<QuizPlayPage />} />
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
          <Route path="people" element={<AdminPeoplePage />} />
          <Route path="events" element={<AdminEventsPage />} />
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
