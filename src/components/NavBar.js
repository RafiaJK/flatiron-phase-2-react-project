//import {Link} from "react-router-dom"
import React from "react";
import Search from "./Search";
import Form from "./Form";
import LocationsContainer from "./LocationsContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import NavLink from "react-router-dom"
import LocationsPage from "./LocationsPage";

function NavBar() {
        return (
              <div className="navbar">
                <nav>
                      <Link to="/" exact> <div className="navlink">Home</div></Link>
                      <Link to="/search" exact><div className="navlink">Search</div></Link>   
                      <Link to="/form" exact><div className="navlink">Add A New Location</div></Link>                       
                </nav>
                </div>
         
        
          );
        }



export default NavBar;