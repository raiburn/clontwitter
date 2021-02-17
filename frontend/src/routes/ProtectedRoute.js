import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";

const ProtectedRoutes = () => {
  // : <Redirect to='/' />
  return (
    <>
      {isAutenticaced() ? (
        <Route exact path="/inicio" component={Home} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};
export default ProtectedRoutes;