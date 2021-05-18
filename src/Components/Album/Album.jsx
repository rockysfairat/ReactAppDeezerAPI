import PropTypes from "prop-types";
import { motion } from "framer-motion";

import "./album.css";

export default function Album({ id, imgSrc, albumTitle }) {
  return (
    <article key={id}>
      <motion.img
        src={imgSrc}
        alt={albumTitle}
        whileHover={{ width: "18vw", height: "18vw" }}
      />
      <h4>{albumTitle} </h4>
    </article>
  );
}

Album.propTypes = {
  id: PropTypes.number,
  imgSrc: PropTypes.string,
  albumTitle: PropTypes.string,
};
