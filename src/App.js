import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Reader } from './Components';
import './App.css';

const App = () => (
    <Router>
        <div className="App">
            <Route exact path="/" component={Reader} />
        </div>
        <Route path="/reader/:id" component={Reader} />
    </Router>
);

export default App;
