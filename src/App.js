// import logo from './logo.svg';
// import './App.css';
import Header from './MyComponent/Header'
import Questions from './MyComponent/Questions'
import Home from './MyComponent/Home'
import Contact from './MyComponent/Contact'
import Signup from './MyComponent/Signup'
import Login from './MyComponent/Login'
import Error from './MyComponent/Error'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
