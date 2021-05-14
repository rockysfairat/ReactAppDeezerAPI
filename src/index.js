import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

// pages: 
import HomePage from './Pages/HomePage/HomePage';
import ArtistPage from './Pages/ArtistPage/ArtistPage';
import DiscographyPage from './Pages/DiscographyPage/DiscographyPage';
import TrackListPage from './Pages/TrackListPage/TrackList';

const App = () => {
    return <Router>
        <Switch>
            <Route exact path='/ReactAppDeezerAPI'>
                <HomePage />
            </Route>
            <Route path='/albums/:albumId/'>
                <TrackListPage />
            </Route>
            <Route path='/artists/:id/'>
                <DiscographyPage />
            </Route>
            <Route path='/:genre/artists/'>
                <ArtistPage />    
            </Route>
        </Switch>
    </Router>
}

ReactDom.render(<App />, document.getElementById('root'));