import './Banner.scss';

export default function Banner({ text }) {
    return (
        <div className="banner">
            <img src="/banner.png" alt="Paysage" className="banner__img" />
            <h2 className="banner__text">{text}</h2>
        </div>
    );
}