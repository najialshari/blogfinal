import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/dist/carousel'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import SinglePage from './components/SinglePage';
// import '../node_modules/html-react-parser/dist/html-react-parser.min'

function App() {
  return (

    <div className="App">
      <Navbar />
      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<SinglePage />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
