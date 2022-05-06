import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import History from './Pages/History/History';
import About from './Pages/About/About';
import Faq from './Pages/Faq/Faq';
import Error from './Pages/Error/Error';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
