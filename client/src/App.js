import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import ProviderPage from './routes/providerPage/providerPage.component';
import ReceiverPage from './routes/receiverPage/receiverPage.component';
import Authentication from './routes/authentication/authentication.component';

let user = {
  username: "abc",
  password:"123456",
  role:"provider"
}

// if(user)
// {
//   console.log('exists');
// }

//let user = null;

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={!user ? <Home/> : (user && user.role === 'provider') ? <Navigate to={"/provider"} replace/> : <Navigate to={"/receiver"} replace/> }/>
        <Route path='/provider/*' element={<ProviderPage/>}/>
        <Route path='/receiver/*' element={<ReceiverPage/>}/>
        <Route path='/auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
