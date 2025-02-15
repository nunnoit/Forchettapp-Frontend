import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { SignUp } from "./pages/signup.jsx"; //Este es el componente de la página para registrar usuario
import { Login } from "./pages/login.jsx";
import { ListaUsuarios } from "./pages/listaUsuarios.jsx";
import { Person } from "./pages/person.jsx";
import { Planet } from "./pages/planet.jsx";
import { Vehicle } from "./pages/vehicle.jsx";

import injectContext from "./store/appContext";

import { Header } from "./component/header";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<SignUp />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<ListaUsuarios />} path="/listaUsuarios" />
            <Route element={<Person />} path="/person/:theid" />
            <Route element={<Planet />} path="/planet/:theid" />
            <Route element={<Vehicle />} path="/vehicle/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
