import { HashRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import MainNavBar from './pages/MainNavbar';
import AdminNavBar from './admin/AdminNavBar';


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  

  useEffect(() => {
    // Initialize admin credentials in sessionStorage on app startup
    if (!sessionStorage.getItem('adminCredentials')) {
      sessionStorage.setItem('adminCredentials', JSON.stringify({
        username: 'mounika',
        password: 'admin'
      }));
    }

    // Check sessionStorage for user role
    const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    
    

    setIsAdmin(adminStatus);
   
    
  }, []);

  // Listen for storage changes to update user role in real-time
  useEffect(() => {
    const handleStorageChange = () => {
      const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    

      setIsAdmin(adminStatus);
      
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
     <HashRouter>
         {isAdmin && <AdminNavBar/>}
        
         {!isAdmin &&   <MainNavBar/>}
     </HashRouter>
  );
}

export default App;