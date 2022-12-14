import './App.css';
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Component/Layout/Layout';
import Notfound from './Component/Notfound/Notfound';
import Movie from './Component/Movie/Movie';
let routes =createBrowserRouter([{path:"/",element:<Layout/>, children:[
  {index:true,element:<Home/>},
  {path:"portfolio",element:<Portfolio/>},
  {path:"about",element:<About/>},
  {path:"contact",element:<Contact/>},
  {path:"movies",element:<Movie/>},
  {path:"*",element:<Notfound/>},
]}])
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
