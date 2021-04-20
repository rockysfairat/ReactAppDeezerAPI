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

const artistNameAndImg = {
    name: 'Test name',
    placeholder: artistPlaceholderImg
}

const Artist = (props) => {
    const { name, placeholder } = artistNameAndImg;
    return <div className='artistContainer'>
        <div className='artistPhoto'>
            <img src={artistNameAndImg.placeholder} />
        </div>
        <h3>{artistNameAndImg.name}</h3>
    </div>
}