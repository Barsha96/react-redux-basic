import { createStore, combineReducers, applyMiddleware } from 'redux';
import User from './reducers/user';


import thunk from 'redux-thunk';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			user: User,
		}),

		applyMiddleware(thunk)
	);
	return store;
};
