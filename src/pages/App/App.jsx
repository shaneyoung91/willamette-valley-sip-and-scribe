import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WineryListPage from '../WineryListPage/WineryListPage';
import WineryDetailPage from '../WineryDetailPage/WineryDetailPage';
import NewReviewPage from '../NewReviewPage/NewReviewPage';

export default function App() {
  const [user, setUser] = useState(null);
  
  return (
    <main className="App">
      <h1>Willamette Valley Sip & Scribe</h1>
      { user ?
        <WineryListPage />
        :
        <AuthPage />
      }
    </main>
  );
}
