import './HostInfo.scss';

export default function HostInfo({ name, picture }) {
    const [firstName, lastName] = name.split(' ');

    return (
        <div className="host-info">
            <p className="host-info__name">
                {firstName}<br/>{lastName}
            </p>
            <img src={picture} alt={name} className="host-info__picture" />
        </div>
    );
}