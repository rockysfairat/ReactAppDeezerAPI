import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import './discographypage.css';


import Album from '../../Components/Album/Album';
import Loader from '../../Components/Loader/Loader';
import Footer from '../../Components/Footer/Footer';
import NoArtistData from '../../Components/No_Artist_Data/NoArtistData';

export default function DiscographyPage() {
    const {id} = useParams();
    return <div class='PageContainer'>
        <AlbumWrapper id={id}/>
        <Footer />
    </div>
    
}

const AlbumWrapper = ({id}) => {

    const baseUrl = `https://api.deezer.com/artist/${id}/top?limit=15`;

    const [albumList, setAlbumList] = useState([]);

    const getAlbums = async (url) => {

        const response = await fetch(url);
        
        const albums = await response.json();

        if (albums === 0) {
            return 'The JSON file is empty!';
        }
        // setTimeout( () => {
        //     setAlbumList(albums.data)}, 3000);

        setAlbumList(albums);

        console.log(albums);
    }

    useEffect(() => {
        getAlbums(baseUrl);
        return () => {}
    }, []);

    if (albumList.length === 0) {
        return <>
            <Loader />
        </>
    }

    console.log(albumList); // must return the obj, delete this line later!

    console.log(albumList.next);


    return <><h2 class='discographyPage_title'>{albumList.data[0]?.artist.name}</h2>
     <div className='albumGrid'>
        {albumList.data.map( (item) => {
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

    <div class='prevAndNext_buttons'>
        {!!albumList.prev && 
            <button onClick={ () => getAlbums(albumList.prev)}>
                PREV
            </button>
        }

        {!!albumList.next &&
            <button onClick={ () => getAlbums(albumList.next)}>
                NEXT
            </button>
        }
    </div>

    <div>
        {albumList.data == 0 &&
            <NoArtistData />
        }
    </div>
    </>
}