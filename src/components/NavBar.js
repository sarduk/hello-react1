import React, { Component } from "react";
import { Link } from "react-router-dom";

const Separator = () => <span> &middot; </span>;

class NavBar extends Component {
render() {
  return <div>
        <Link to="/">Home</Link>
        <Separator />
        <Link to="/about">Informazioni</Link>
  </div>
}
}
export default NavBar;