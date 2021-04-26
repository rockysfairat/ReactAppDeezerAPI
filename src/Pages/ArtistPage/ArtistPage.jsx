import './artistpage.css';
// import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

// import artistPlaceholderImg from '../../images/artistPlaceholder.jpg';

import Footer from '../../Components/Footer/Footer.jsx';
import React from 'react';




export default function ArtistPage() {

    
    return <div className='PageContainer'>
        <h2>Genre: one of three </h2>
        <div className='artistPicker'>
            <Artist />
        </div>
        <Footer />
    </div>
}

const url = 'https://api.deezer.com/search?q=drumandbass&index=30';

const Artist = () => {

    const [artistList, setArtistList] = useState([]);

        const getArtists = async () => {

            const response = await fetch(url);
            const artists = await response.json();

            if (artists === 0) {
                return 'The JSON file is empty!';
            }
            setArtistList(artists);
        };

    useEffect( () => {
        getArtists();
    }, []);

    return (
        <div className='artistContainer'>
            {artistList.map( (artistItem) => {
                const {name, picture_medium} = artistItem;
                return (<React.Fragment>
                    <div className='artistPhoto'>
                         <img src={picture_medium} alt={name}/>
                    </div>
                    <h3>{name}</h3>
                </React.Fragment>
                )
            })}
            <h3>Test</h3>
        </div>
    )
}