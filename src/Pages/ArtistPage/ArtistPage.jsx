import './artistpage.css';

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

const artistImg = {
    placeholder: artistPlaceholderImg
}

const Artist = (props) => {
    const { placeholder } = artistImg;
    return <div className='artistContainer'>
        <div className='artistPhoto'>
            <img src={artistImg.placeholder} />
        </div>
        <h3>Test name</h3>
    </div>
}