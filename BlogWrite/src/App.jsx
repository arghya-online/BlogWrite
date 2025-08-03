import React, { useState, useEffect } from 'react';
import './App.css';
import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice.js';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData)); // or { userData } based on your reducer
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-teal-50'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) :null;
}

export default App;
