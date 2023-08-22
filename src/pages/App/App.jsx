import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WineryListPage from '../WineryListPage/WineryListPage';
import WineryCard from '../../components/WineryCard/WineryCard';
import WineryDetailPage from '../WineryDetailPage/WineryDetailPage';
import MyReviewsPage from '../MyReviewsPage/MyReviewsPage';
import SideBar from '../../components/SideBar/SideBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import { WineryProvider } from '../../utilities/winery-context';

export default function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(getUser());
  const [wineries, setWineries] = useState([]);
  const [atmospheres, setAtmospheres] = useState([]);
  const [additionalAmenities, setAdditionalAmenities] = useState([]);
  const [visitingPolicies, setVisitingPolicies] = useState([]);

  return (
    <div>
      <WineryProvider>
      <main className="App">
        <SideBar isLoggedIn={isLoggedIn} user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        &nbsp;
          <div className='content'>
            <Routes>
                <Route path="/reviews" element={<MyReviewsPage />} />

                <Route path="/wineries" element={<WineryListPage wineries={wineries}
                  setWineries={setWineries} atmospheres={atmospheres} setAtmospheres={setAtmospheres}
                  additionalAmenities={additionalAmenities} setAdditionalAmenities={setAdditionalAmenities}
                  visitingPolicies={visitingPolicies} setVisitingPolicies={setVisitingPolicies} />} />

                <Route path="/wineries/:wineryId" element={<WineryDetailPage wineries={wineries}
                  setWineries={setWineries} atmospheres={atmospheres} setAtmospheres={setAtmospheres}
                  additionalAmenities={additionalAmenities} setAdditionalAmenities={setAdditionalAmenities}
                  visitingPolicies={visitingPolicies} setVisitingPolicies={setVisitingPolicies} />} />

                <Route path="/auth" element={<AuthPage setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

                <Route path="/" element={<WelcomePage />} />
            </Routes>
          </div>
      </main>
      </WineryProvider>
    </div>
  );
}
