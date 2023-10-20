import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from './components/login/Login';
import RegisterForm from './components/register/Register';
import './components/register/Register.css';
import HomeDash from './components/home/Home';
import { useEffect, useState } from 'react';


const App = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      console.log({storedToken});
      setToken(storedToken);
    }
  }, []);
  
  if(!token) {
    return <LoginForm setToken={setToken} />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm setToken={setToken}/>} /> 
        <Route path="/login" element={<LoginForm setToken={setToken} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<HomeDash />} />
      </Routes>
    </Router>
  );
}

export default App;
