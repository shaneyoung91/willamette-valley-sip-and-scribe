import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WineryListPage from '../WineryListPage/WineryListPage';
import WineryDetailPage from '../WineryDetailPage/WineryDetailPage';
import MyReviewsPage from '../MyReviewsPage/MyReviewsPage';
import SideBar from '../../components/SideBar/SideBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import { WineryProvider } from '../../utilities/winery-context';

export default function App() {  
  const [user, setUser] = useState(getUser());
  const [wineries, setWineries] = useState([]);
  const [atmospheres, setAtmospheres] = useState([]);
  const [additionalAmenities, setAdditionalAmenities] = useState([]);
  const [visitingPolicies, setVisitingPolicies] = useState([]);
  const [reviews, setReviews] = useState([]);

  return (
    <div>
      <WineryProvider>
      <div className="App">
        <SideBar user={user} setUser={setUser} />
        &nbsp;
          <div className='content'>
            <Routes>
                <Route path="/myreviews" element={<MyReviewsPage reviews={reviews} setReviews={setReviews} />} />
                <Route path="/wineries" element={<WineryListPage wineries={wineries}
                  setWineries={setWineries} atmospheres={atmospheres} setAtmospheres={setAtmospheres}
                  additionalAmenities={additionalAmenities} setAdditionalAmenities={setAdditionalAmenities}
                  visitingPolicies={visitingPolicies} setVisitingPolicies={setVisitingPolicies} />} />
                <Route path="/wineries/:wineryId" element={<WineryDetailPage wineries={wineries}
                  setWineries={setWineries} atmospheres={atmospheres} setAtmospheres={setAtmospheres}
                  additionalAmenities={additionalAmenities} setAdditionalAmenities={setAdditionalAmenities}
                  visitingPolicies={visitingPolicies} setVisitingPolicies={setVisitingPolicies} 
                  reviews={reviews} setReviews={setReviews} user={user}/>} />
                <Route path="/auth" element={<AuthPage setUser={setUser} />} />
                <Route path="/" element={<WelcomePage />} />
            </Routes>
          </div>
      </div>
      </WineryProvider>
    </div>
  );
}
