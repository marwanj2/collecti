import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Layout from './component/layout/Layout';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
<<<<<<< HEAD
import LayoutUser from './component/user/layout/LayoutUser';
import Details from './pages/Details';


=======
import LayoutUser from './component/user/layout/LayoutUser'
>>>>>>> 0c25ab19d732ef8d85b06a746bb3c11789006051

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login}/>
          <Route path='/layout' component={Layout} />
          <Route path='/layoutuser' component={LayoutUser} />
<<<<<<< HEAD
          <Route path='/customer/:Id' component={Details} />
=======

>>>>>>> 0c25ab19d732ef8d85b06a746bb3c11789006051
        </Switch>
      </Router>
    </>
  );
}

export default App;
