import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import PrivateRoute from "./components/PrivateRoute";
import './styles/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<PostDetail />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-post"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-post/:id"
          element={
            <PrivateRoute>
              <EditPost />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
