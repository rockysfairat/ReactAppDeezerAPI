import './HomePage.css';

import pic01 from '../../images/musicianDrumAndBass.jpg';
import pic02 from '../../images/musicianDeepHouse.jpg';
import pic03 from '../../images/musicianChill.jpg';

import Footer from '../../Components/Footer/Footer.jsx';

export default function HomePage() {

    return <div className='PageContainer'>
        <HomePageHeader />
        <GenrePicker />
        <Footer />
    </div>
}

const genresArray = [
    {
        id: 1,
        title: 'Drum & Bass',
        pictogram: 'Ϡ',
        background: pic01
    }
,
    {
        id: 2,
        title: 'Deep House',
        pictogram: 'Ѯ',
        background: pic02
    }
,
    {
        id: 3,
        title: 'Chill',
        pictogram: 'ϐ',
        background: pic03
    }

]

const HomePageHeader = () => {
    return <header>
        <h1>Music to work to</h1>
        <h2>Pick up the genre</h2>
    </header>
}

const GenrePicker = () => {
    return (<div className='genrePicker'>
        { genresArray.map((genre) => {
            return <Genre key={genre.id} {...genre}></Genre>
        })}
    </div>
    )
}

const Genre = ({title, pictogram, background}) => {
    return <div className='genre' style={{backgroundImage: 'url(' + background + ')'}}>
        <p>{pictogram}</p>
        <h3>{title}</h3>
    </div>
}