import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigationPage from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigationPage />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/newmeetup" element={<NewMeetupPage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
