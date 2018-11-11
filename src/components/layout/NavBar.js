import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({ links, makeActiveLink, active }) => {
  return (
    <nav className='nav-bar'>
      {
        links.map((link)=> {

          return (
            <div key={link.id} className={(link.id == active) ? "link-div active-link" : "link-div"} onClick={()=> {makeActiveLink(link.id)}}>
              <Link to={link.to} className="links">{link.desc}</Link>
            </div>
          );
        })
      }
    </nav>
  );
};


export default NavBar;

// <div id=1 className="link-div">
//         <Link to="/" className="links">All Songs</Link>
//        </div>
//       <div className="link-div">
//         <Link to="/topfive/" className="links">Top 5 Songs</Link>
//       </div>