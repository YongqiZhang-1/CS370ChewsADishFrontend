import React, { useEffect, useRef } from "react";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Popular from './components/pages/Popular'
import Gallary from './components/pages/Gallary'
import UserPage from './components/pages/UserPage'
import UserProfile from './components/pages/UserProfile'
import CreateYourOwnRecipe from './components/pages/CreateYourOwnRecipe';
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login';
import Recipes from './components/pages/Recipes';
import RecipeDetail from './components/pages/RecipeDetail';
import Search from './components/pages/Search';
import IngredientWalmart from './components/pages/IngredientWalmart';
import IngredientDetail from './components/pages/IngredientDetail';
import SingleGallary from "./components/pages/SingleGallary";
import { Provider, useDispatch } from 'react-redux';

const ScrollIntoView = ({ children, location }) => {
  const prevLocation = useRef();

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0);
      prevLocation.current = location.pathname;
    }
  }, [location]);

  return children;
};

const Scrolled = withRouter(ScrollIntoView);

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Popular' exact component={Popular} />
            <Route path='/Gallary' exact component={Gallary} />
            <Route path="/Gallary/:id" exact component={SingleGallary} />
            <Route path='/UserPage' exact component={UserPage} />
            <Route path='/UserProfile' exact component={UserProfile} />
            <Route path='/CreateYourOwnRecipe' exact component={CreateYourOwnRecipe}/>
            <Route path='/SignUp' exact component={SignUp} />
            <Route path='/Login' exact component={Login} />
            <Route path='/Recipes' exact component={Recipes} />
            <Route path='/Recipe/:id' exact component={RecipeDetail}/>
            <Route path='/Search' exact component={Search}/>
            <Route path='/Ingredient' exact component={IngredientWalmart}/>
            <Route path='/Ingredient/:id' exact component={IngredientDetail}/>
          </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
