import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Alert, Layout, Nav, NotFound } from "./components";
import { CreateStory, EditStory, Home, Search, Settings, Library, StoryPage } from "./pages";
import { APP_PREFIX, INITIAL_FONT_FAMILY_VALUE } from './constants';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem(`${APP_PREFIX}_theme`);
    const fontFamily = localStorage.getItem(`${APP_PREFIX}_fontFamily`);
    const fontSize = localStorage.getItem(`${APP_PREFIX}_fontSize`);
    if (!theme || theme == null) localStorage.setItem(`${APP_PREFIX}_theme`, JSON.stringify("dark"));
    if (!fontFamily || fontFamily == null) localStorage.setItem(`${APP_PREFIX}_fontFamily`, JSON.stringify(INITIAL_FONT_FAMILY_VALUE));
    if (!fontSize || fontSize == null) localStorage.setItem(`${APP_PREFIX}_fontSize`, "16");
  }, []);
  return (
    <Router>
      <Nav />
      <Alert />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/library" element={<Library />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/stories" element={<Search />} />
          <Route exact path="/stories/new" element={<CreateStory />} />
          <Route exact path="/stories/:id" element={<StoryPage />} />
          <Route exact path="/stories/:id/edit" element={<EditStory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
