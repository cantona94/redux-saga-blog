import { Routes, Route } from "react-router-dom";
import { ROUTES } from './routes/index';
import { Home, About, UserPosts } from "./pages/index";
import { Header } from "./components/index";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.USER_POSTS} element={<UserPosts />} />
      </Routes>
    </div>
  );
}

export default App;
