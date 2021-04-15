import ReactDom from 'react-dom';

import './index.css';

import HomePage from './Pages/HomePage/HomePage.jsx';
import ArtistPage from './Pages/ArtistPage/ArtistPage.jsx';
import DiscographyPage from './Pages/DiscographyPage/DiscographyPage.jsx';

const App = () => {
    return <div>
        <HomePage />
        <ArtistPage />
        <DiscographyPage />
    </div>
}

ReactDom.render(<App />, document.getElementById('root'));