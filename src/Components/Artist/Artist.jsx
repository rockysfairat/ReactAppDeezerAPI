import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import './artist.css';

export default function Artist ({
    id,
    imgSrc,
    name
}) {


  return (
    <div className='artistContainer'>
      <motion.div className='artistPhoto' key={id} whileHover={{width: '13vw', height: '13vw'}} whileTap={{width: '5vw', height: '5vw'}}>
        <img src={imgSrc} alt={name}/>
      </motion.div>
      <h3>{name}</h3>
    </div>
  )
}

Artist.propTypes = {
    id: PropTypes.number,
    imgSrc: PropTypes.string,
    name: PropTypes.string
}