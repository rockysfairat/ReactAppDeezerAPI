import { useEffect, useState } from 'react';

import './tracklist.css';


import Tracks from '../../Components/Tracks/Tracks';
import Footer from '../../Components/Footer/Footer';

export default function TrackListPage() {
    return <div class='PageContainer'>
        <TrackListGrid />
        <Footer />
    </div>
}

const url = 'https://api.deezer.com/album/7036582';

const TrackListGrid = () => {

    const [trackList, setTrackList] = useState([]);

    const getTracks = async () => {
        const response = await fetch(url);
        const tracks = await response.json();

        if (tracks === 0) {
            return 'The JSON file is empty!'
        }

        setTrackList(tracks);
    }

    useEffect( () => {
        getTracks();
        return () => {}
    }, []);

    if (trackList.length === 0) {
        return <>
            <h1 style={{color: 'red'}}>Loading...........................</h1>
        </>
    }

    console.log(trackList); // must return the obj, delete this line later!

    return <div className='tracksWrapper'>
        <h2>{trackList.title} <span>by {trackList.artist.name}</span> </h2>
        <h5>Label: {trackList.label} / Released: {trackList.release_date}</h5>
        <div className='trackListAndAlbumPhoto_wrapper'>
        <img src={trackList.cover_medium} alt={trackList.title} />
        <div className='trackListGrid'>
            {trackList.tracks.data.map( (item) => {
                const {title, duration, explicit, preview} = item;
                return ( <Tracks 
                    trackTitle={title}
                    trackDuration={duration}
                    isTrackExplicit={explicit}
                    trackPreview={preview} />
                )
            })}
        </div>
        </div>
    </div>
    
}