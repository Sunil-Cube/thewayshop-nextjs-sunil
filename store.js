import { createStore, applyMiddleware } from 'redux'
import { rootReducer} from './root-reducer'
import logger from 'redux-logger'

import { composeWithDevTools } from 'redux-devtools-extension';



export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger),
      // other store enhancers if any

))