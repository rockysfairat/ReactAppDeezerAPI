import { useEffect, useState } from 'react';

import './artistpage.css';

// import artistPlaceholderImg from '../../images/artistPlaceholder.jpg';
import Artist from '../../Components/Artist/Artist'

import Footer from '../../Components/Footer/Footer';

export default function ArtistPage() {
    return <div className='PageContainer'>
        <h2>Genre: one of three </h2>
        <div>
            <ArtistGrid />
        </div>
        <Footer />
    </div>
}

// const artistNameAndImg = {
//     name: 'Test name',
//     placeholder: artistPlaceholderImg
// }

const url = 'https://api.deezer.com/search?q=chill&index=30';

const ArtistGrid = () => {

    const [artistList, setArtistList] = useState([]);

    const getArtists = async () => {

        const response = await fetch(url);
        const artists = await response.json();

        if (artists === 0) {
            return 'The JSON file is empty!';
        }
        // setTimeout( () => {
        //     setArtistList(artists.data)}, 3000);
            
        setArtistList(artists.data);
    }

    useEffect( () => {
        getArtists();
    }, []);

    console.log(artistList); // returns the obj

    if (artistList.length === 0) {
        return <>
        <h1 style={{color: 'red'}}>Loading...........................</h1>
        </>
    }

    return <div className='artistPicker'>
        {artistList.map( (item) => {
                const {id, name, picture_medium} = item.artist;
                return ( <Artist
                    key={id}
                    imgSrc={picture_medium}
                    name={name} />
                )
            })}
    </div>
}