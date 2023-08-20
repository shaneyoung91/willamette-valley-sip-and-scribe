import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WineryListPage from '../WineryListPage/WineryListPage';
import WineryDetailPage from '../WineryDetailPage/WineryDetailPage';
import NewReviewPage from '../NewReviewPage/NewReviewPage';
import SideBar from '../../components/SideBar/SideBar';
import WelcomePage from '../WelcomePage/WelcomePage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [user, setUser] = useState({
    'name': '',
    'email': '',
    'password': '',
    'confirmPW': '',
    'error': '',
  })

  return (
    <main className="App">
      <h1>Willamette Valley Sip & Scribe</h1>
      <SideBar isLoggedIn={isLoggedIn}/>
      &nbsp;
        <Routes>
          <Route path="/reviews/new" element={<NewReviewPage />} />
          <Route path="/wineries" element={<WineryListPage />} />
          <Route path="/auth" element={<AuthPage user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
    </main>
  );
}
