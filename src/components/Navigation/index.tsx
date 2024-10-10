import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LinksList, ListItem, Navbar } from "./styles";
import { navLinks } from "./constants";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar>
      <LinksList>
        {navLinks.map(({ label, path }) => (
          <ListItem key={path}>
            <Link
              style={{
                color: path === location.pathname ? "#4cb7eb" : "inherit",
              }}
              to={path}
            >
              {label}
            </Link>
          </ListItem>
        ))}
      </LinksList>
    </Navbar>
  );
};

export default Navigation;
