import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = props => {
    const { characters, gender, searchText } = props;
    return (
        <ul className="char-list__wrapper">
            {characters
                .filter(character => {
                    return gender === ''
                        ? true
                        : gender === character.gender;
                })
                .filter(character =>
                    searchText === ''
                    || character.name.toLowerCase().includes(searchText.toLowerCase()))
                .map(character => {
                    return (
                        <li key={character.id} className="char-list__item">
                            <Link
                                to={`/character/${character.id}`}
                                className="">
                                <CharacterCard character={character} />
                            </Link>
                        </li>
                    );
                })}
        </ul>
    );
};

export default CharacterList;