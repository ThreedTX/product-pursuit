import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import ProductList from "./components/ProductList";
import ProductPage from './components/ProductPage';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <Switch>
            <Route path='/' exact>
              <ProductList />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path='/products/:productId'>
              <ProductPage />
            </Route>
            <Route path='/users/:userId'>
              <ProfilePage />
            </Route>
          </Switch>
        </>
      )}

    </>
  );
}

export default App;
