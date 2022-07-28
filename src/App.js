import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Page from './pages/Page';
import StarWars from './pages/StarWars';
import Todos from './components/Todos';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
      <Route path='/starwars' element={<StarWars />} />
      <Route path='/todos' element={<Todos />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
