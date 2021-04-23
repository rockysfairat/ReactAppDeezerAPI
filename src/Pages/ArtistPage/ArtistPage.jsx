import './artistpage.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import artistPlaceholderImg from '../../images/artistPlaceholder.jpg';

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



const Artist = () => {
    const [artistList, setArtistList] = useState([]);

    useEffect( () => {
        async function fetchArtistData() {
            try {
                const apiCallResponse = await axios.get('https://api.deezer.com/search?q=drumandbass');
                setArtistList(apiCallResponse.data);
            } catch (error) {
                console.log('This is the error!');
            }
        }
        fetchArtistData();
    }, [])

    if (artistList === 0) {
        return 'Sorrrrrrryyyyyyy!!!!';
    }

    return (
        <div className='artistContainer'>
            {artistList.map( (artistItem) => {
                return ( <React.Fragment>
                    
                    <div className='artistPhoto'>
                        <img src={artistItem.artist.picture_medium} />
                    </div>
                    <h3>{artistItem.title}</h3>
                </React.Fragment> )
            } ) }
        </div>
    )
}