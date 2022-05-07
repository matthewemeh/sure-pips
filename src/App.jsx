import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import History from './Pages/History/History';
import About from './Pages/About/About';
import Faq from './Pages/Faq/Faq';
import Error from './Pages/Error/Error';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import db from './services/firebase';
import { onSnapshot, collection } from 'firebase/firestore';

const App = () => {
  const [socialInfo, setSocialInfo] = React.useState([]);
  const [signalInfo, setSignalInfo] = React.useState([]);

  function getSocials() {
    onSnapshot(collection(db, 'socials'), snapshot =>
      setSocialInfo(snapshot.docs.map(doc => doc.data()))
    );
  }

  function getSignals() {
    onSnapshot(collection(db, 'signals'), snapshot =>
      setSignalInfo(snapshot.docs.map(doc => doc.data()))
    );
  }

  React.useEffect(() => {
    if (socialInfo.length === 0) getSocials();
    if (signalInfo.length === 0) getSignals();
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home signalInfo={signalInfo[0]} />} />
        <Route path='/history' element={<History />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer socialInfo={socialInfo[0]} />
    </Router>
  );
};

export default App;
