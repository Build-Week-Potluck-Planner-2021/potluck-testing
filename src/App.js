import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserDashboard from './components/DashBoard/UserDashboard';
import PrivateRoute from './components/Login/PrivateRoute';
import FrontPage from './components/FrontPage';
import CreatePotluck from './components/Potluck/CreatePotluck';
import Login from './components/Login/Login';
import './App.css'
import PotLuckCard from './components/Potluck/PotLuckCard';
import FoodList from './components/FoodList';

const WithAuth = PrivateRoute(UserDashboard);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/home' component={FrontPage} />
        <Route path='/login' component={FrontPage} />
        <Route path='/add-potluck' component={CreatePotluck} />
        <Route path='/potluck-card' component={PotLuckCard} />
        <Route path='/add-food' component={FoodList} />
        {/* <Route
          exact
          to='/protected'
          render={props => <WithAuth {...props} />}
        /> */}
        <Route path='/protected' component={UserDashboard} />
        <footer className='foot'>
          <Link className='foot-link' to='/add-potluck'>Add Potluck</Link>
          <Link className='foot-link' to='/potluck-card'>Potlucks</Link>
          <Link className='foot-link' to='/home'>Home</Link>
        </footer>
      </Router>
    );
  }
}

export default App;