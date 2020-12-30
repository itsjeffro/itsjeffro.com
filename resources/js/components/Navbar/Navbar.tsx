import * as React from 'react';
import NavbarToggle from "./NavbarToggle";

const Navbar = (props) => {
  const {
    title,
  } = props;
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">{ title }</a>
      
      <NavbarToggle />
      
      { props.children }
    </nav>
  );
};

export default Navbar;
