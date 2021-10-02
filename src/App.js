import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Shop }  from './pages/Shop';
import { useState } from 'react';

function App() {
  const [cartOpened, setCardOpened] = useState(false);
  const [cartClosed, setCardClosed] = useState(true);


  return (
    <BrowserRouter>
      <div className="wrapper clear">
        
        { cartOpened && <Drawer onClickClose={ ()=>{
          setCardOpened(false)
        } }/>}
        <Header onClickCart={ ()=>setCardOpened(true) }/>
        <Switch>
          <Route path={'/home'} component={Home} />
          <Route path={'/favorites'} component={Favorites} />
          <Route path={'/'} component={Shop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;



