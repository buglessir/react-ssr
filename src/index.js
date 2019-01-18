import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}

if (typeof window !== 'undefined') {
    render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
