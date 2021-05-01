import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import './tracks.css';
// import playButton from '../../images/playButton.svg';

export default function Tracks ({
    trackTitle,
    trackDuration,
    isTrackExplicit,
    trackPreview
}) {

    return <ul>
        <li class='trackTitle'>{trackTitle}  <span>{isTrackExplicit}</span></li>
        <li class='trackDuration'>{trackDuration}</li>
        <li class='trackPreview'>
            <a href={trackPreview} target='_blank'>[play]</a>
        </li>
    </ul>
}

Tracks.propTypes = {
    trackTitle: PropTypes.string,
    trackDuration: PropTypes.number,
    isTrackExplicit: PropTypes.bool,
    trackPreview: PropTypes.string
}