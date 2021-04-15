import './discographypage.css';

import Footer from '../../Components/Footer/Footer.jsx';

export default function DiscographyPage() {
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