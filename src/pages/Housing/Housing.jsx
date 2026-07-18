import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import HostInfo from '../../components/HostInfo';
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import Collapse from '../../components/Collapse';
import housesData from '../../backend/mockBackend.json';
import './Housing.scss';

export default function Housing() {
    const { id } = useParams();
    const house = housesData.find(h => h.id === id);

    if (!house) {
        return <p>Logement introuvable</p>;
    }

    const equipmentsList = house.equipments.join('\n');

    return (
        <div className="housing">
            <Carousel pictures={house.pictures} />

            <div className="housing__header">
                <div className="housing__left">
                    <h1 className="housing__title">{house.title}</h1>
                    <p className="housing__location">{house.location}</p>
                    <div className="housing__tags">
                        {house.tags.map(tag => (
                            <Tag key={tag} label={tag} />
                        ))}
                    </div>
                </div>
                <div className="housing__right">
                    <HostInfo name={house.host.name} picture={house.host.picture} />
                    <Rating value={parseInt(house.rating)} />
                </div>
            </div>

            <div className="housing__collapses">
                <Collapse title="Description" content={house.description} />
                <Collapse title="Équipements" content={equipmentsList} />
            </div>
        </div>
    );
}