import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './discographypage.css';


import Album from '../../Components/Album/Album';
import Footer from '../../Components/Footer/Footer';

export default function DiscographyPage() {
    return <div class='PageContainer'>
        <AlbumWrapper />
        <Footer />
    </div>
    
}

const url = 'https://api.deezer.com/artist/6/top?limit=20';

const AlbumWrapper = () => {
    
    const [albumList, setAlbumList] = useState([]);

    const getAlbums = async () => {

        const response = await fetch(url);
        const albums = await response.json();

        if (albums === 0) {
            return 'The JSON file is empty!';
        }
        // setTimeout( () => {
        //     setAlbumList(albums.data)}, 3000);

        setAlbumList(albums.data);

    }

    useEffect(() => {
        getAlbums();
    }, []);

    if (albumList.length === 0) {
        return <>
            <h1 style={{color: 'red'}}>Loading...........................</h1>
        </>
    }

    console.log(albumList); // must return the obj, delete this line later!

    return <div className='albumGrid'>
        {albumList.map( (item) => {
            const {cover_medium, title} = item.album;
            return ( <Link to='/tracks'>
                <Album 
                imgSrc={cover_medium}
                albumTitle={title} />
            </Link>
            )
        })}
    </div>
}