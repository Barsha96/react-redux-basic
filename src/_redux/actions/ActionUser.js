
import * as ActionTypes from '../ActionTypes';

export const getUserData = () => async (dispatch) => {
	try {
		const response = [
            {
                "name":"Barsha",
                "address":"Kapan",
                "home":"rudramatichowk",
            },
            {
                "name":"Rudra",
                "address":"Kapan",
                "home":"Nilopul",
            },
            {
                "name":"Bismita",
                "address":"Samakhushi",
                "home":"rudramatichowk",
            }
        ]
		dispatch({ type: ActionTypes.GET_ALL_USERS, payload: response });
		
	} catch (e) {
		console.log(e);
	}
};

