import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


import About from './routes/About';
import Home from './routes/Home';
import Post from './routes/Post';
import Posts from './routes/Posts';

ReactDOM.render(<BrowserRouter>
    <App>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" exact render={(props) => (
            <Post key={props.match.params.id} {...props} />)
        } />
        <Route path="/:id" exact render={(props) => (
            <About key={props.match.params.id} {...props} />)
        } />
        <Route path="/posts" exact render={(props) => (
            <Posts key={props.match.params.id} {...props} />)
        } /> 
    </App>
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
