import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { myStore } from './Config';

let routerpath = createBrowserRouter([
  { path:"/",element:<Home/>},
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },

])

function App() {
  return (
    <Provider store = {myStore}>
    <div className='App' >
      <Header/>
      <RouterProvider router = {routerpath}/>
    </div>
    </Provider>
  );
}

export default App;