import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import { GlobalStyles } from './globel-styles'
import { firebase } from './lib/firebase.prod'
import App from './app'
import reportWebVitals from './reportWebVitals'
import { FirebaseContext } from './context/firebase'
import * as serviceWorker from './serviceWorker'

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)

serviceWorker.register()
reportWebVitals()
