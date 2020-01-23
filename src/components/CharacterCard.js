import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
    const { name, species, image } = props.character;

    return (
        <div className="card">
            <img className="card__image" src={image} alt={`${name} avatar`}
            />
            <div className="card__text">
                <p className="card__text--name">{name}</p>
                <p className="card__text--species">{species}</p>
            </div>
        </div >
    );
};

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string
};

export default CharacterCard;
