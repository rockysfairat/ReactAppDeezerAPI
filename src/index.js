import ReactDom from 'react-dom';

import './index.css';

import HomePage from './Pages/HomePage/HomePage.jsx';


// Div that contains three pages of the app. Has to be divided later:
const App = () => {
    return <div>
        <HomePage />
        {/* <SecondPage />
        <ThirdPage /> */}
    </div>
}

// Setting up pages:

// Setting up the second page:

// Put here everything that has to be rendered:

// const SecondPage = () => {
//     return <div className='PageContainer'>
//         <h2>Genre: one of three </h2>
//         <div className='artistPicker'>
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//             <Artist />
//         </div>
//         <Footer />
//     </div>
// }

// const Artist = () => {
//     return <div className='artistContainer'>
//         <div className='artistPhoto'>
//             <p>Put the photo in here!</p>
//         </div>
//         <h3>Test test</h3>
//     </div>
// }


// // Setting up the third page:


// // Put here everything that has to be rendered:
// const ThirdPage = () => {
//     return <div>
//         <AlbumWrapper />
//         <AlbumWrapper />
//         <AlbumWrapper />
//         <Footer />
//     </div>
    
// }

// const AlbumWrapper = () => {
//     return <article>
//         <AlbumCover />
//         <AlbumSongList />
//     </article>
// }

// const AlbumCover = () => {
//     return <figure>
//         <p>Put the album cover in here!</p>
//     </figure>
// }

// const AlbumSongList = () => {
//     return <section>
//         <h4>Album title / year</h4>
//         <ul>
//             <li class='songNumLiElement'>01</li>
//             <li class='songTitleLiElement'>Bad Romance</li>
//             <li class='songDurationLiElement'>6:33</li>
//             <li class='songRatingLiElement'>4.6</li>
//         </ul>
//         <ul>
//             <li class='songNumLiElement'>01</li>
//             <li class='songTitleLiElement'>Bad Romance</li>
//             <li class='songDurationLiElement'>6:33</li>
//             <li class='songRatingLiElement'>4.6</li>
//         </ul>
//         <ul>
//             <li class='songNumLiElement'>01</li>
//             <li class='songTitleLiElement'>Bad Romance</li>
//             <li class='songDurationLiElement'>6:33</li>
//             <li class='songRatingLiElement'>4.6</li>
//         </ul>
//         <ul>
//             <li class='songNumLiElement'>01</li>
//             <li class='songTitleLiElement'>Bad Romance</li>
//             <li class='songDurationLiElement'>6:33</li>
//             <li class='songRatingLiElement'>4.6</li>
//         </ul>
//     </section>
// }

ReactDom.render(<App />, document.getElementById('root'));