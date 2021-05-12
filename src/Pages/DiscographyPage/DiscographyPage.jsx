import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import './discographypage.css';


import Album from '../../Components/Album/Album';
import Loader from '../../Components/Loader/Loader';
import Footer from '../../Components/Footer/Footer';

export default function DiscographyPage() {
    const {id} = useParams();
    console.log(id);
    return <div class='PageContainer'>
        <AlbumWrapper id={id}/>
        <Footer />
    </div>
    
}

const AlbumWrapper = ({id}) => {

    const url = `https://api.deezer.com/artist/${id}/top?limit=20`;

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
        return () => {}
    }, []);

    if (albumList.length === 0) {
        return <>
            <Loader />
        </>
    }

    console.log(albumList); // must return the obj, delete this line later!

    return <><h2>{albumList[0]?.artist.name}</h2>
     <div className='albumGrid'>
        {albumList.map( (item) => {
            const {id, cover_medium, title} = item.album;
            return ( <Link to={'/albums/' + id}>
                <Album 
                id={id}
                key={id}
                imgSrc={cover_medium}
                albumTitle={title} />
            </Link>
            )
        })}
    </div>
    </>
}