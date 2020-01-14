import React from 'react';
import BestLogin from './components/BestLogin';
import Friends from './components/Friends';
import Public from './components/Public';
import './App.css';
import { Route,Link,Redirect } from 'react-router-dom';


function App() {

  const PrivateRoute = ({ component: Friends, ...rest }) => (
    <Route {...rest} render={(props) => 
        localStorage.getItem('token') ? (
            <Friends {...props} />
        ) : (
            <Redirect to='/login' />
        )
    } />
)




  return (
    <div className="App">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/frenz'>Friends</Link>
      </div>
      <Route exact path='/' component={Public} />
      <Route  path='/login' component={BestLogin} />
      <PrivateRoute  path='/frenz' component={Friends} />
      

    </div>
  );
}

export default App;
