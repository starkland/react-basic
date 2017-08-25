import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import { bindActionCreators } from 'redux';
import { updateCurrentGuy } from './reducers/guys';

const actions = bindActionCreators({updateCurrentGuy}, store.dispatch);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

setTimeout(() => {
    store.dispatch({
        type: 'NEW_GUY', 
        payload: {  number: 4, name: 'New Todo', position: 'F' }
    })
}, 1000);

registerServiceWorker();
