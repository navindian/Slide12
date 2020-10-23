import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register'
import Profile from './Pages/Profile';
import Support from "./Pages/Support"
import Mat from "./Parts/matnav"
import GoalsCard from "./components/Goalscard"
import Account from "./Pages/Accounts"
import Addcash from "./Pages/AddCash"
import Getcash from "./Pages/Getcash"
import Activity from "./Pages/Activity"
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Mat/>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Goals" component={GoalsCard} />
          <Route path='/' exact component={GoalsCard} />
          <Route path='/support' component={Support} />
          <Route path='/profile' component={Profile} />
          <Route path='/accounts' component={Account} />
          <Route path='/addcash' component={Addcash} />
          <Route path='/getcash' component={Getcash} />
          <Route path='/activity' component={Activity} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App;