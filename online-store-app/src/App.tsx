import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QaPage } from './pages/QaPage';
import { ProductPage } from './pages/ProductPage';

function App(){

  return (
    <div className='app'>
      <NavBar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/information' element={<QaPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/:id' element={<ProductPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
