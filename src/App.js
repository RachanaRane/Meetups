import { Route, Routes } from 'react-router-dom';
import AllMeetUps from './pages/AllMeetUps';
import Favourites from './pages/Favourites';
import NewMeetUps from './pages/NewMeetUps';
import MainNavigation from './components/layouts/MainNavigation';
import Layouts from './components/layouts/Layouts';
function App() {
  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<AllMeetUps />} />
        <Route path="/newmeetup" element={<NewMeetUps />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Layouts>
    
  );
}

export default App;
