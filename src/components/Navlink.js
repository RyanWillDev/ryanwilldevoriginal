import React from 'react';


const NavLink = (props) => {
  let floatClass = `float-${props.direction}`;
  return (
    <div className={floatClass}>
      <a href="#">{props.componentName}</a>
    </div>
  );
};

NavLink.propTypes = {
  direction: React.PropTypes.string,
  componentName: React.PropTypes.string,
};

export default NavLink;
