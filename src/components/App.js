import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import { getAllCharsFromApi, getSelCharFromApi } from '../services/data';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      searchText: '',
      gender: '',
      characters: [],
      charSelected: {}
    }
    this.searchText = React.createRef();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.focusSearchText = this.focusSearchText.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);

  }

  // event methods

  handleChangeGender(ev) {
    const gender = ev.target.value;
    this.setState({ gender: gender })
  }

  focusSearchText() {
    this.searchText.current.focus();
  }

  handleSearchText(value) {
    this.setState({ searchText: value });
  }

  componentDidMount() {
    getAllCharsFromApi()
      .then(characters => {
        this.setState({ characters: characters });
      });
  }

  getSelCharFromApi(id) {
    if (id !== this.state.charSelected.id) {
      getSelCharFromApi(id)
        .then(data => {
          let character = {
            name: data.name,
            id: data.id,
            image: data.image,
            species: data.species,
            origin: data.origin.name,
            status: data.status,
            episodes: data.episode.length
          };

          this.setState({ charSelected: character })
        })
    }
  }

  renderCharacterDetail(props) {
    const id = Number(props.match.params.id);
    this.getSelCharFromApi(id);
    return <CharacterDetail character={this.state.charSelected} />
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <Switch>
            <Route path="/" exact>
              <Search
                searchText={this.searchText}
                handleSearchText={this.handleSearchText}
                gender={this.state.gender}
                handleChangeGender={this.handleChangeGender}
              />
              <CharacterList
                characters={this.state.characters}
                searchText={this.state.searchText}
                gender={this.state.gender}
              />
            </Route>
            <Route
              path="/character/:id"
              render={this.renderCharacterDetail}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
