import jwt_decode from 'jwt-decode';
import * as React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tabler-react/dist/Tabler.css";
import { logoutUser, setCurrentUser } from './actions/authentication';
import HomePage from "./HomePage.react";
import PricingCardsPage from "./interface/PricingCardsPage.react";
import { Email, Error404, ForgotPasswordPage, LoginPage, ProfilePage, RegisterPage, SimpleLoginPage } from "./pages";
import setAuthToken from './setAuthToken';
import store from './store';


type Props = {||};

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
function App(props: Props): React.Node {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/email" component={Email} />
            <Route exact path="/forgot-password" component={ForgotPasswordPage} />
            <Route exact path="/slogin" component={SimpleLoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/reports" component={PricingCardsPage} />
            <Route exact path="/pricing" component={PricingCardsPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
