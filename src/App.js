import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLogeedIn] = useState(false);

  const login = useCallback(() => {
    setIsLogeedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLogeedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" exact element={<Users />}></Route>
        <Route path="/:userId/places" exact element={<UserPlaces />}></Route>
        <Route path="/places/new" exact element={<NewPlace />}></Route>
        <Route path="/places/:placeId" exact element={<UpdatePlace />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" exact element={<Users />}></Route>
        <Route path="/:userId/places" exact element={<UserPlaces />}></Route>
        <Route path="/auth" exact element={<Auth />}></Route>
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
