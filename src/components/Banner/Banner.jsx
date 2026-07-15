import './Banner.scss';

export default function Banner({ text }) {
    return (
        <div className="banner">
            <h2 className="banner__text">{text}</h2>
        </div>
    );
}