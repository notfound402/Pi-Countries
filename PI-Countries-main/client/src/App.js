import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Routes, Route  } from 'react-router-dom';
import  Home  from './components/Home/Home';
import About from './components/About/About';
import Create from './components/Create/Create';
import DetailCard from './components/Detail/DetailCard';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route exact path ='/' element ={<LandingPage/>}/>
      <Route exact path ='about' element = {<About/>}/>
      <Route exact path ='/home' element ={<Home/>}/>
      <Route exact path ='/create' element ={<Create/>}/>
      <Route exact path ='/countries/:id' element = {<DetailCard/>}/>
      </Routes>


    </div>
   
  );
}

export default App;
