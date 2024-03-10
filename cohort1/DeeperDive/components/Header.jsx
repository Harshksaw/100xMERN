import PropTypes from "prop-types";
import React from "react";

const Header = React.memo(function Header({ title }) {
  const [state, setState] = React.useState(0);
  function change() {
    setState(Math.random());
  }
  return (
    <div>
      <div>
        <button onClick={change}>click</button>
        {state}
        <br />
      </div>
      <div>
        Header
        {title}
      </div>
    </div>
  );
});

export default Header;
