import PropTypes from "prop-types";

import "./loader.css";

import dancing_dude from "../../images/dancing_sailor_dude.gif";

export default function Loader() {
  return (
    <div className="loader_container">
      <img className="loader_gif" src={dancing_dude} alt="" />
      <h2>Wait a bit, we're loading data... </h2>
    </div>
  );
}

Loader.propTypes = {
  dancing_dude: PropTypes.string,
};