import Header from './MyComponent/Header'
import Questions from './MyComponent/Questions'
import Home from './MyComponent/Home'
import LHome from './MyComponent/LHome'
import Contact from './MyComponent/Contact'
import Signup from './MyComponent/Signup'
import Login from './MyComponent/Login'
import Error from './MyComponent/Error'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LHome' element={ user && user._id ? <LHome setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/Login' element={<Login setLoginUser={setLoginUser}/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
