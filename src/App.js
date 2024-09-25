import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Notfound from './pages/Notfound'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login}/>
          <Route exact path="/home" Component={Home}/>
          <Route exact path="/openSignUp" Component={SignUp}/>
          <Route path="*" Component={Notfound}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
