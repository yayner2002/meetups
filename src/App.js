import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/newmeetup" element={<NewMeetupPage />} />
          <Route path="/favorite" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
