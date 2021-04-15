import './HomePage.css';

import pic01 from '../../images/musicianDrumAndBass.jpg';
import pic02 from '../../images/musicianDeepHouse.jpg';
import pic03 from '../../images/musicianChill.jpg';

import Footer from '../../Components/Footer.jsx';

export default function HomePage() {

    return <div className='PageContainer'>
        <HomePageHeader />
        <GenrePicker />
        <Footer />
    </div>
}

const drumAndBass = {
    title: 'Drum & Bass',
    pictogram: 'Ϡ',
    background: pic01
}

const deepHouse = {
    title: 'Deep House',
    pictogram: 'Ѯ',
    background: pic02
}

const chill = {
    title: 'Chill',
    pictogram: 'ϐ',
    background: pic03
}

const HomePageHeader = () => {
    return <header>
        <h1>Music to work to</h1>
        <h2>Pick up the genre</h2>
    </header>
}

const GenrePicker = () => {
    return <div className='genrePicker'>
        <Genre 
            title={drumAndBass.title}
            pictogram={drumAndBass.pictogram}
            background={drumAndBass.background} />
        <Genre 
            title={deepHouse.title}
            pictogram={deepHouse.pictogram}
            background={deepHouse.background} />
        <Genre 
            title={chill.title}
            pictogram={chill.pictogram}
            background={chill.background} />
    </div>
}

const Genre = ({title, pictogram, background}) => {
    return <div className='genre' style={{backgroundImage: 'url(' + background + ')'}}>
        <p>{pictogram}</p>
        <h3>{title}</h3>
    </div>
}