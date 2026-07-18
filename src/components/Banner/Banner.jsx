import './Banner.scss';

export default function Banner({ text, variant }) {
    return (
        <div className={`banner${variant ? ' banner--' + variant : ''}`}>
            {text && <h2 className="banner__text">{text}</h2>}
        </div>
    );
}