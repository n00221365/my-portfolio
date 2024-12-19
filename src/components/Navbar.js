import {Link} from 'react-router-dom';

const Navbar = () => {

return(
  <div class="navbar" style={{backgroundColor: "#d7d4d8"}}>

    <div  class="pl-auto"><Link to = {"/"}>Home</Link></div> |
    <Link to = {"/about"}>About</Link> |
    <Link to = {"/contact"}>Contact</Link> |
    <Link to = {"/projects"}>Projects</Link> |


  </div>
);
  
}

export default Navbar;