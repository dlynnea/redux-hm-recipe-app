import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Header from './components/Header'
import Home from './components/Home'

const mapStateToProps = state => ({
  appName: state.appName
})


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header appName={this.props.appName} />
        {this.props.appName}
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}) )(App);
