
import * as ActionTypes from '../ActionTypes';

export const getUserData = () => (dispatch) => {
    const user = [
        {
            "id":1,
            "name":"Barsha",
            "address":"Kapan",
            "home":"rudramatichowk",
        },
        {
            "id":2,
            "name":"Rudra",
            "address":"Kapan",
            "home":"Nilopul",
        },
        {
            "id":3,
            "name":"Bismita",
            "address":"Samakhushi",
            "home":"rudramatichowk",
        }
    ]
	try {
		dispatch({ type: ActionTypes.GET_ALL_USERS, payload: user });	
	} catch (e) {
		console.log(e);
	}
};

export const editUserData = (data) => async (dispatch) => {
    console.log(data)
	try {
		dispatch({ type: ActionTypes.SET_USER, payload:data });
        console.log("mark 2")
	} catch (e) {
        console.log("mark 3")
		console.log(e);
	}
};

