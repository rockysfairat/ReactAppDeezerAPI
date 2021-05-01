import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import './album.css';

export default function Album ({
    imgSrc,
    albumTitle
}) {

    return <article>
        <motion.img src={imgSrc} alt={albumTitle} whileHover={{width: '18vw', height: '18vw'}}
            />
        <h4>{albumTitle} </h4>
    </article>

}

Album.propTypes = {
    imgSrc: PropTypes.string,
    albumTitle: PropTypes.string
}