import './App.css';
import Explore from './component/Explore';
import LandingPage from './component/LandingPage';
import LoginPage from './component/LoginPage';
import Navbar from './component/Navbar';
import PreviewExplor from './component/PreviewExplor';
import SignUp from './component/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Signform from './component/Signform';
import Signform2 from './component/SignForm2';
import Signform3 from './component/Signform3';
import PersonalProfile from './component/Profile';

function App() {
  return (
   <>

<Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/home" element={<LandingPage />}></Route>
          <Route exact path="/previewExplor" element={<PreviewExplor/>}></Route>
          {/* <Route exact path="/about" element={}></Route> */}
          <Route exact path="/LoginPage" element={<LoginPage />}></Route>
          <Route exact path="/LoginPage/SignUp" element={<SignUp />}></Route>
          <Route exact path="/signform" element={<Signform />}></Route>
          <Route exact path="/signform2" element={<Signform2 />}></Route>
          <Route exact path="/signform3" element={<Signform3 />}></Route>
          <Route exact path="/profile" element={<PersonalProfile/>}></Route>

        </Routes>
      </Router>
   </>

  );
}

export default App;
