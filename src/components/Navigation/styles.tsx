import styled from "styled-components";

export const Navbar = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
  min-height: 40px;
  padding: 0 16px;
`;

export const LinksList = styled("ul")`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
  list-style-type: none;
`;

export const ListItem = styled("li")`
  a {
    color: #000;
    font-size: 16px;
    text-decoration: none;
    transition: 0.1s ease-in-out;

    &:hover,
    &:active {
      color: #4cb7eb;
    }
  }
`;
