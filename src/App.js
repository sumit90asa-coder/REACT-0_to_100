import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import MyList from "./pages/MyList";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// A small component to hide Navbar/Footer on the Login screen
const AppLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!isLoginPage && <NavigationBar />}
      
      <div style={{ flex: 1 }}>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes (Must be logged in to see these) */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/tv-shows" element={<ProtectedRoute><TVShows /></ProtectedRoute>} />
          <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
          <Route path="/latest" element={<ProtectedRoute><Latest /></ProtectedRoute>} />
          <Route path="/my-list" element={<ProtectedRoute><MyList /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </div>

      {!isLoginPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;