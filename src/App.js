import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import MyList from "./pages/MyList";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <NavigationBar />

        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TVShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;