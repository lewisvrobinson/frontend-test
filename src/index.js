import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { fetchCounters } from './actions/counters'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(fetchCounters())

const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
