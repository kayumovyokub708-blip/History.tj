import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import CountriesPage from "./pages/CountriesPage"
import ResourcesPage from "./pages/ResourcesPage"
import QuizzesPage from "./pages/QuizzesPage"
import OlympiadsPage from "./pages/OlympiadsPage"
import LeaderboardPage from "./pages/LeaderboardPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/olympiads" element={<OlympiadsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
