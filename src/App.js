import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Page from './pages/Page';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
