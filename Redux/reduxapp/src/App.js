import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter, RouterProvider,} from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';

let routerPaths = createBrowserRouter([
  {"path":"/Home.js","element":<Home/>},
  {"path":"/About.js","element":<About/>},
  {"path":"/Contact.js","element":<Contact/>}
])
function App() {
  return (
    <div>
      <RouterProvider router={routerPaths}/> 
    </div>
  );
}

export default App;