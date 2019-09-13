import jwt_decode from 'jwt-decode';
import * as React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "tabler-react/dist/Tabler.css";
import { logoutUser, setCurrentUser } from './actions/authentication';
import HomePage from "./HomePage.react";
import PricingCardsPage from "./interface/PricingCardsPage.react";
import { Email, Error404, ForgotPasswordPage, Logout, ProfilePage, SimpleLoginPage, SimpleRegisterPage } from "./pages";
import setAuthToken from './setAuthToken';
import store from './store';


type Props = {||};
let loggedIn = false;
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  loggedIn = true;
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
    loggedIn = false;
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    loggedIn === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)
console.log(loggedIn, "loggedIn");

function App(props: Props): React.Node {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path="/forgot-password" component={ForgotPasswordPage} />
            <Route exact path="/login" component={SimpleLoginPage} />
            <Route exact path="/log-out" component={Logout} />
            <Route exact path="/register" component={SimpleRegisterPage} />
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/email" component={Email} />
            <PrivateRoute exact path="/reports" component={PricingCardsPage} />
            <PrivateRoute exact path="/pricing" component={PricingCardsPage} />
            <PrivateRoute exact path="/profile" component={ProfilePage} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
