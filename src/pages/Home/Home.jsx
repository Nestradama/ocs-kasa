import { useState } from 'react';  // Plus besoin d'importer useEffect
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import housesData from '../../backend/mockBackend.json';
import './Home.scss';

export default function Home() {
    const [houses] = useState(housesData);

    return (
        <div className="home">
            <Banner text="Chez vous, partout et ailleurs" />
            <div className="home__gallery">
                {houses.map(house => (
                    <Card key={house.id} {...house} />
                ))}
            </div>
        </div>
    );
}