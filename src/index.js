import ReactDom from 'react-dom';

import './index.css';

import HomePage from './Pages/HomePage/HomePage';
import ArtistPage from './Pages/ArtistPage/ArtistPage';
import DiscographyPage from './Pages/DiscographyPage/DiscographyPage';
import TrackListPage from './Pages/TrackListPage/TrackList';

const App = () => {
    return <div>
        <HomePage />
        <ArtistPage />
        <DiscographyPage />
        <TrackListPage />
    </div>
}

ReactDom.render(<App />, document.getElementById('root'));