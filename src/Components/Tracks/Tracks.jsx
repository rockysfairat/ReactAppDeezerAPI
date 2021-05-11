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

    function niceLookingDuration(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

    return <ul>
        <li class='trackTitle'>{trackTitle}  <span>{isTrackExplicit}</span></li>
        <li class='trackDuration'>{niceLookingDuration(trackDuration)}</li>
        <li class='trackPreview'>
            <a href={trackPreview} target='_blank'>
            <svg className='tracks_svg' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" x="0px" y="0px"><title>Combined Shape</title><desc>Created with Sketch.</desc><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#fff"><path d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M10.0210634,7.49746028 C9.94026649,7.44533322 9.84615288,7.4176086 9.75,7.4176086 C9.47385763,7.4176086 9.25,7.64146623 9.25,7.9176086 L9.25,16.0823914 C9.25,16.1785443 9.27772461,16.2726579 9.32985168,16.3534548 C9.47955588,16.5854963 9.78902192,16.6522439 10.0210634,16.5025397 L16.3487701,12.4201483 C16.4084968,12.3816149 16.4593216,12.3307902 16.497855,12.2710634 C16.6475592,12.0390219 16.5808116,11.7295559 16.3487701,11.5798517 L10.0210634,7.49746028 Z"/></g></g></svg>
            </a>
        </li>
    </ul>
}

Tracks.propTypes = {
    trackTitle: PropTypes.string,
    trackDuration: PropTypes.number,
    isTrackExplicit: PropTypes.bool,
    trackPreview: PropTypes.string
}