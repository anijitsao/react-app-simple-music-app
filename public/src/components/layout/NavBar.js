import { Link } from 'react-router-dom'

export default ({ links, makeActiveLink, active }) => {
  return (
    <nav className='nav-bar'>
      {
        links.map((link) => {

          return (
            <div key={link.id} className={(link.id == active) ? "link-div active-link" : "link-div"} onClick={() => { makeActiveLink(link.id) }}>
              <Link to={link.to} className="links">{link.desc}</Link>
            </div>
          );
        })
      }
    </nav>
  );
};
