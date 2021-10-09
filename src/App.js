import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Test from './components/Test';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Link exact to='/'>
        Home
      </Link>
      <Link exact to='/test'>
        Test
      </Link>

      <Route exact path='/' component={Home} />
      <Route exact path='/test' component={Test} />
    </div>
  );
}

export default App;
