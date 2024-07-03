import './App.css';
import CreatePost from './components/CreatePost';
import {BrowserRouter , Route, Routes} from "react-router-dom"

import  Navbar from './components/navbar';
import Card from './components/Card';
import UpdateUser from './components/UpdateUser';




function App() {
  


   
  return (

    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<CreatePost/>} />
      <Route  exact path='/card' element ={<Card/>} />
      <Route  path='/update/:id' element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
