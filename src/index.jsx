import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './config/serviceWorker';
import { App } from './app/app.component';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
