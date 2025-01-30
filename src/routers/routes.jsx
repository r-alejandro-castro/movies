import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import MovieDetails from '../pages/MovieDetails.jsx';

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/movie/:movieId' element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;