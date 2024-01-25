import './index.css'
import { NavBar } from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import BoardOfDirectors from './pages/BoardOfDirectors';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router>
        <NavBar /> 
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
