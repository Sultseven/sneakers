import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Shop }  from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper clear">
        <Header/>
        <Switch>
          <Route path={'/drawer'} component={Drawer} />
          <Route path={'/home'} component={Home} />
          <Route path={'/favorites'} component={Favorites} />
          <Route path={'/'} component={Shop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;



