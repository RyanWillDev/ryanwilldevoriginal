import React from 'react';
import { Link } from 'react-router';


const NavLink = (props) => {
  const floatClass = ` float float-${props.direction}`;
  const path = `/${props.componentName.toLowerCase()}`;
  return (
    <div className={floatClass}>
      <Link to={path}>{props.componentName}</Link>
    </div>
  );
};

NavLink.propTypes = {
  direction: React.PropTypes.string,
  componentName: React.PropTypes.string,
};

export default NavLink;
