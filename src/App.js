import './App.css';
import CreatePost from './components/CreatePost';
import {BrowserRouter , Route, Routes} from "react-router-dom"

import  Navbar from './components/navbar';
import Card from './components/Card';




function App() {
  


   
  return (

    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<CreatePost/>} />
      <Route  exact path='/card' element ={<Card/>} />
    </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
