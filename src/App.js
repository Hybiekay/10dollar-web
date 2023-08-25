import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/Signup';
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/forget-password">
         <ForgetPassword/>
        </Route>
        <Route path="/reset-password">
         <ResetPassword/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;