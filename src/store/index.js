import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import filter from './reducers/filter';
import rules from './reducers/rules';

const reducer = combineReducers( {
	rules,
	form,
	filter,
} )

const middlewares = [ thunkMiddleware ]

const enhancers = [
	applyMiddleware( ...middlewares ),
	...( window.__REDUX_DEVTOOLS_EXTENSION__ ? [ window.__REDUX_DEVTOOLS_EXTENSION__() ] : [] ),
]

const enhancer = compose( ...enhancers )

const store = createStore( reducer, enhancer )

export default store
