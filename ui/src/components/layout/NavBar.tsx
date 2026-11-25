import { useState } from "react";
import { Link } from "react-router-dom";

import Constants from "../Constants";

export default () => {
  const allConstants = Constants();
  const [activeLink, setActiveLink] = useState(allConstants.ACTIVE_LINK);

  return (
    <nav className="nav-bar">
      {allConstants.ALL_LINKS.map((link) => {
        return (
          <div
            key={link.linkId}
            className={
              link.linkId == activeLink ? "link-div active-link" : "link-div"
            }
            onClick={() => {
              setActiveLink(link.linkId);
            }}
          >
            <Link to={link.to} className="links">
              {link.desc}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};
