import PropTypes from "prop-types";

import "./footer.css";

import DeezerLogo from "../../images/DeezerLogo.png";

export default function Footer() {
  return (
    <footer>
      Powered by{" "}
      <img className="deezer_logo" src={DeezerLogo} alt="Deezer logo" />
    </footer>
  );
}

Footer.propTypes = {
  DeezerLogo: PropTypes.string,
};