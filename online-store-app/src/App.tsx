import './styles/App.css';
import { NavBar } from './components/NavBar';
import { MainPage } from './pages/MainPage';


function App(){

  return (
    <div className='app'>
      <NavBar/>
      <MainPage/>
    </div>
  )
}

export default App;
