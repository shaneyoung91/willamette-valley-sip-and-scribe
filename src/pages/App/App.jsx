import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WineryListPage from '../WineryListPage/WineryListPage';
import WineryDetailPage from '../WineryDetailPage/WineryDetailPage';
import NewReviewPage from '../NewReviewPage/NewReviewPage';
import SideBar from '../../components/SideBar/SideBar';

export default function App() {
  const [user, setUser] = useState({});
  
  return (
    <main className="App">
      <h1>Willamette Valley Sip & Scribe</h1>
      <SideBar />
      &nbsp;
      { user ?
        <>
          <Routes>
            <Route path="/reviews/new" element={<NewReviewPage />} />
            <Route path="/wineries" element={<WineryListPage />} />
          </Routes>
        </>
          :
          <AuthPage />
      }
    </main>
  );
}
