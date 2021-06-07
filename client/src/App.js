import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css';
import { useRoutes } from './routes';
import {Navbar} from './components/navbar';

function App() {
  const routes = useRoutes()
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container">
        {routes}
      </div>
    </Router>
  );
}

export default App;
