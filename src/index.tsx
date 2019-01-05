import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/app.component';
import * as serviceWorker from './config/serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/scss/font-awesome.scss';
import 'normalize-scss/sass/_normalize.scss';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
