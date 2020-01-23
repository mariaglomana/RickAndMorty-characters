import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
    const { image, name, status, species, origin, episodes } = props.character;

    return (
        <div className="char-detail__wrapper">
            <Link className="char-detail__back-link" to="/">
                <div className="char-detail__back-link--btn">Volver</div>
            </Link>
            <div className="char-detail__card">
                <img className="char-detail__card--image" src={image} alt={`${name} avatar`} />
                <div className="char-detail__card--text">
                    <h2 className="char-detail__card--name">{name}</h2>
                    <p><span className="typo-bold">Status: </span>{status}</p>
                    <p><span className="typo-bold">Species: </span>{species}</p>
                    <p><span className="typo-bold">Origin: </span>{origin}</p>
                    <p><span className="typo-bold">Episodes: </span>{episodes}</p>
                </div>
            </div>
        </div>
    )
}

CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    status: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    episodes: PropTypes.number.isRequired,
};

export default CharacterDetail;

