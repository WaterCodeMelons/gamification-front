import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/app.component';
import * as serviceWorker from './config/serviceWorker';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
