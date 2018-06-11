import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassMaker from './classMaker';
import languageConstants from './languageConstants';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: languageConstants.ENGLISH
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(){
    this.setState({language: languageConstants.CHINESE});
  }

  render() {
    
    const classMaker = ClassMaker(this.state.language);

    return (
      <div className="App">
        <p className={'otherClass' + classMaker('header')}>
          HELLO
        </p>

        <button onClick={this.changeLanguage}>
          Click me
        </button>

      </div>
    );
  }
}

export default App;
