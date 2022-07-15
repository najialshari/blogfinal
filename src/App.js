import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/dist/carousel'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import SinglePage from './components/SinglePage';

function App() {
  return (

    <div className="App">

      <Navbar />

      {/* mainContainer used to wrap all components with lower layer z-index 1  */}

      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<SinglePage />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
