import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Page from './pages/Page';
import StarWars from './pages/StarWars';
import Todos from './pages/Todos';

function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path='/starwars' element={<StarWars />} />
          <Route path='/todos' element={<Todos />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
