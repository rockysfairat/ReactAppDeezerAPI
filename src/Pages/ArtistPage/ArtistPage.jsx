import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './artistpage.css';

// import artistPlaceholderImg from '../../images/artistPlaceholder.jpg';
import Artist from '../../Components/Artist/Artist'
import Footer from '../../Components/Footer/Footer';

export default function ArtistPage() {
    const {genre} = useParams();
    return <div className='PageContainer'>
        <h2>Genre: {genre} </h2>
        <div>
            <ArtistGrid genre={genre}/>
        </div>
        <Footer />
    </div>
}

const ArtistGrid = ({genre}) => {

    const baseUrl = `https://api.deezer.com/search?q=${genre}`;

    const [artistList, setArtistList] = useState([]);

    const getArtists = async (url) => {

        const response = await fetch(url);
        const artists = await response.json();

        if (artists === 0) {
            return 'The JSON file is empty!';
        }
        // setTimeout( () => {
        //     setArtistList(artists.data)}, 3000);
            
        setArtistList(artists);
    }

    useEffect( () => {
        getArtists(baseUrl);
        return () => {}
    }, []);

    console.log(artistList); // returns the obj

    if (artistList.length === 0) {
        return <>
        <h1 style={{color: 'red'}}>Loading...........................</h1>
        </>
    }

    return <div>
        <div className='artistPicker'>
        {artistList.data.map( (item) => {
                let {id, name, picture_medium} = item.artist;
                return ( <Artist
                    key={id}
                    imgSrc={picture_medium}
                    name={name} />
                )
            })}

        
    </div>

    <div class='prevAndNext_buttons'>
    {!!artistList.prev && 
            <button onClick={ () => getArtists(artistList.prev)}>
                PREV
            </button>
        }

        {!!artistList.next &&
            <button onClick={ () => getArtists(artistList.next)}>
                NEXT
            </button>
        }
    </div>
    </div>
    
}