import ReactDom from 'react-dom';

import './index.css';
import pic01 from './images/musicianDrumAndBass.jpg';

// Div that contains three pages of the app. Has to be divided later:
const App = () => {
    return <div>
        <FirstPage />
        {/* <SecondPage />
        <ThirdPage /> */}
    </div>
}

// Setting up pages:

// Setting up the first page:

// Put here everything that has to be rendered:
const FirstPage = () => {
    return <div className='PageContainer'>
        <FirstPageHeader />
        <GenrePicker />
        <Footer />
    </div>
}

// Setting up vars for the first page:
const drumAndBass = {
    title: 'Drum & Bass',
    pictogram: 'Ϡ',
    background: pic01
}

const deepHouse = {
    title: 'Deep House',
    pictogram: 'Ѯ',
}

const chill = {
    title: 'Chill',
    pictogram: 'ϐ'
}

// Setting up elements of the first page:
const FirstPageHeader = () => {
    return <header>
        <h1>Music to work to</h1>
        <h2>Pick up the genre</h2>
    </header>
}

const GenrePicker = ({}) => {
    return <div className='genrePicker'>
        <Genre 
            title={drumAndBass.title}
            pictogram={drumAndBass.pictogram}
            background={drumAndBass.background} />
        <Genre 
            title={deepHouse.title}
            pictogram={deepHouse.pictogram} />
        <Genre 
            title={chill.title}
            pictogram={chill.pictogram} />
    </div>
}

const Genre = ({title, pictogram, background}) => {
    return <div className='genre' style={{backgroundImage: `url(${background}) width=300 height=300`}}>
        <img src={background} width='300' height='300' />
        <p>{pictogram}</p>
        <h3>{title}</h3>
    </div>
}

const Footer = () => {
    return <footer>Powered by Deezer (put the logo in here)</footer>
}


// Setting up the second page:

// Put here everything that has to be rendered:
const SecondPage = () => {
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

const Artist = () => {
    return <div className='artistContainer'>
        <div className='artistPhoto'>
            <p>Put the photo in here!</p>
        </div>
        <h3>Test test</h3>
    </div>
}


// Setting up the third page:


// Put here everything that has to be rendered:
const ThirdPage = () => {
    return <div>
        <AlbumWrapper />
        <AlbumWrapper />
        <AlbumWrapper />
        <Footer />
    </div>
    
}

const AlbumWrapper = () => {
    return <article>
        <AlbumCover />
        <AlbumSongList />
    </article>
}

const AlbumCover = () => {
    return <figure>
        <p>Put the album cover in here!</p>
    </figure>
}

const AlbumSongList = () => {
    return <section>
        <h4>Album title / year</h4>
        <ul>
            <li class='songNumLiElement'>01</li>
            <li class='songTitleLiElement'>Bad Romance</li>
            <li class='songDurationLiElement'>6:33</li>
            <li class='songRatingLiElement'>4.6</li>
        </ul>
        <ul>
            <li class='songNumLiElement'>01</li>
            <li class='songTitleLiElement'>Bad Romance</li>
            <li class='songDurationLiElement'>6:33</li>
            <li class='songRatingLiElement'>4.6</li>
        </ul>
        <ul>
            <li class='songNumLiElement'>01</li>
            <li class='songTitleLiElement'>Bad Romance</li>
            <li class='songDurationLiElement'>6:33</li>
            <li class='songRatingLiElement'>4.6</li>
        </ul>
        <ul>
            <li class='songNumLiElement'>01</li>
            <li class='songTitleLiElement'>Bad Romance</li>
            <li class='songDurationLiElement'>6:33</li>
            <li class='songRatingLiElement'>4.6</li>
        </ul>
    </section>
}

ReactDom.render(<App />, document.getElementById('root'));