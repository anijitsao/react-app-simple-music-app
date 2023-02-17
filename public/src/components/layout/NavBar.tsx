import { Link } from "react-router-dom";

type NavigationLink = {
  to: string;
  desc: string;
  id: number;
};
type NavbarProps = {
  links: NavigationLink[];
  active: number;
  makeActiveLink: (index: number) => void;
};

export default ({ links, makeActiveLink, active }: NavbarProps) => {
  return (
    <nav className="nav-bar">
      {links.map((link) => {
        return (
          <div
            key={link.id}
            className={link.id == active ? "link-div active-link" : "link-div"}
            onClick={() => {
              makeActiveLink(link.id);
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
