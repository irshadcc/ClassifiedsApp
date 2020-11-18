import { useState } from 'react';
import { BrowserRouter as Router,
        Route, 
        Switch} from 'react-router-dom';
import UserContext from './contexts/UserContext';

import Home from './pages/Home/Home' ;
import Search from './pages/Search/Search'
import Login from './pages/Login/Login'
// import Signup from './pages/Signup/SignUp' 


function App() {
   
  let [user,setUser] = useState(null) ; 
  
  
  
  return (
    
   <UserContext.Provider value={{user,setUser}}>
      <Router>
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route path="/search"> <Search/></Route>
            <Route path="/login"> <Login/></Route>
            {/* <Route path="/signup"> <Signup/></Route> */}
     
          </Switch>
      </Router>
   </UserContext.Provider> 
  
  );
}

export default App;
