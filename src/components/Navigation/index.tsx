import React from "react";
import { Link } from "react-router-dom";
import { LinksList, ListItem, Navbar } from "./styles";
import { navLinks } from "./constants";

const Navigation: React.FC = () => {
  return (
    <Navbar>
      <LinksList>
        {navLinks.map(({ label, path }) => (
          <ListItem key={path}>
            <Link to={path}>{label}</Link>
          </ListItem>
        ))}
      </LinksList>
    </Navbar>
  );
};

export default Navigation;
