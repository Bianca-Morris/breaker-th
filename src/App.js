import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import logo from './logo.svg';
import AudioPlayer from './components/AudioPlayer';
import Sidebar from './components/Sidebar';
import Edit from './components/Edit';
import Display from './components/Display';
// import NowPlaying from './components/NowPlaying';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'Loading your song...',
            episode: {},
        };
        this.updateEp = this.updateEp.bind(this);
    }

    componentDidMount() {
        // retrieve the audio data from the API
        this.updateEp();
    }

    updateEp() {
        // retrieve updated audio data from the API
        axios.get('http://localhost:8080/episode')
        .then(resp => {
            console.log('resp.data', resp.data);
            this.setState({
                episode: resp.data.episode,
                status: 'Loaded!',
            });
        })
        .catch(err => {
            console.log('err', err);
        });
    }

    mainPage() {
        return (<Display getEp={() => this.state.episode} />);
    }

    render() {
        console.log('Ep: ', this.state.episode);
        return (
            <Router>
              <div className="App">
                    <header className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />
                          {
                              this.state.status !== 'Loaded!' ? null :

                                  <AudioPlayer
                                      source={this.state.episode.enclosure_url}
                                      sourceType={this.state.episode.enclosure_type}
                                  />
                          }
                    </header>
                    {
                        this.state.status !== 'Loaded!' ? null :
                        <div className="Main">
                            <div className="Left-sidebar">
                                <Sidebar
                                    show={this.state.episode.show}
                                    eptitle={this.state.episode.title}
                                />
                            </div>
                            <div className="Right-sidebar">
                                <Link to="/listen">/display</Link><br />
                                <Link to="/edit">/edit</Link>
                                <Switch>
                                    <Redirect exact from={`/`} to={`/listen`} />
                                    <Route
                                        path='/listen'
                                        exact
                                        component={() => this.mainPage()}
                                    />
                                    <Route
                                        path='/edit'
                                        exact
                                        component={Edit}
                                        ep={this.state.episode}
                                        callback={this.updateEp}
                                    />
                                </Switch>
                            </div>
                        </div>
                    }
              </div>
          </Router>
        );
    }
}

export default App;
