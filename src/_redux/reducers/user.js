import * as ActionTypes from '../ActionTypes';


const initialState = {

	isLoading: false,
	users: [],
}

export default function (state = initialState, action) {
	switch (action.type) {
        case ActionTypes.GET_ALL_USERS:
			return {
				...state,
				users: action.payload,
			};
		case ActionTypes.GET_USER:
			return {
				...state,
				users: action.payload,
			};
		case ActionTypes.SET_USER:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
        }
}
