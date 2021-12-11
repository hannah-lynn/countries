import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchword: '',
    };
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((all) => this.setState({ countries: all }));
  }

  onSearchWord = (event) => {
    this.setState({ searchword: event.target.value });
  };
  render() {
    const { countries, searchword } = this.state;
    console.log('countries herex :', countries);
    const filteredCountries = countries.filter((countries) => {
      return countries.name.common
        .toLowerCase()
        .includes(searchword.toLowerCase());
    });
    return !countries.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className='tc'>
        <h1>Flags Of The World</h1>
        <SearchBar searchChange={this.onSearchWord} />
        <Scroll>
          <ErrorBoundary>
            <CardList countries={filteredCountries} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
