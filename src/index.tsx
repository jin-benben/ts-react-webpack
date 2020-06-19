import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './App'
import './index.less'
const store =createStore(reducer)
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById("root"))
