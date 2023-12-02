import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard';
import Unauth from './components/Unauth';
import ViewNote from './pages/ViewNote';
import AddNote from './pages/AddNote'
import SearchNote from './pages/SearchNote'


function App() {
  const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        fetch('/api/v1/check-auth-status')
            .then((response) => {
                if (response.status === 200) {
                    // User is authenticated, set the user data.
                    return response.json();
                } else {
                    // User is not authenticated or an error occurred.
                    return null;
                }
            })
            .then((userData) => {
              setUser(userData);
            });
    }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={(!user) ? <Unauth/> : <Dashboard/>} />
        <Route path="/dashboard/viewNote/:nId" element={(!user) ? <Unauth/> : <ViewNote/>}/>
        <Route path="/dashboard/addNote" element={(!user) ? <Unauth/> : <AddNote/>}/>
        <Route path="/dashboard/search/:query" element={(!user) ? <Unauth/> : <SearchNote/>}/>
        {/* <Route path="/login/success" element={(!user) ? <Landing /> : <Thanks/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
