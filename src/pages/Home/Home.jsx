import { useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import housesData from '../../backend/mockBackend.json';
import './Home.scss';

export default function Home() {
    const [houses] = useState(housesData);

    return (
        <div className="home">
            <Banner text={"Chez vous,\npartout et ailleurs"} />
            <div className="home__gallery">
                {houses.map(house => (
                    <Card key={house.id} {...house} />
                ))}
            </div>
        </div>
    );
}