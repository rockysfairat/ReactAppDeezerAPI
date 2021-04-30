import './artistpage.css';
import { motion } from 'framer-motion';

import artistPlaceholderImg from '../../images/artistPlaceholder.jpg';

import Footer from '../../Components/Footer/Footer.jsx';

export default function ArtistPage() {
    return <div className='PageContainer'>
        <h2>Genre: one of three </h2>
        <div className='artistPicker'>
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
        </div>
        <Footer />
    </div>
}

const artistNameAndImg = {
    name: 'Test name',
    placeholder: artistPlaceholderImg
}

const Artist = (props) => {
    const { name, placeholder } = artistNameAndImg;
    return <div className='artistContainer'>
        <motion.div className='artistPhoto'  whileHover={{width: '13vw', height: '13vw'}}>
            <img src={artistNameAndImg.placeholder} />
        </motion.div>
        <h3>{artistNameAndImg.name}</h3>
    </div>
}