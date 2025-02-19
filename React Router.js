import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase'; // Import Firebase auth
import LoginPage from './LoginPage'; // Your login page
import Dashboard from './Dashboard'; // Admin dashboard
import { useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // If user is logged in, navigate to the dashboard
        history.push('/dashboard');
      } else {
        // Otherwise, stay on the login page
        history.push('/login');
      }
    });
  }, [history]);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
};

export default App;
