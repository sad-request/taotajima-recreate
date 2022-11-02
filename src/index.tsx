import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// const store: Store<ArticleState, ArticleAction> & {
//     dispatch: DispatchType;
// } = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <Provider store={store}>
    <App />
    // {/* </Provider> */}
);
