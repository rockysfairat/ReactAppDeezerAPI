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

        setTrackList(tracks.tracks.data);
    }

    useEffect( () => {
        getTracks();
    }, []);

    if (trackList.length === 0) {
        return <>
            <h1 style={{color: 'red'}}>Loading...........................</h1>
        </>
    }

    console.log(trackList); // must return the obj, delete this line later!

    return <div className='trackListGrid'>
        {trackList.map( (item) => {
            const {title, duration, explicit, preview} = item;
            return ( <Tracks 
                trackTitle={title}
                trackDuration={duration}
                isTrackExplicit={explicit}
                trackPreview={preview} />
            )
        })}
    </div>
}