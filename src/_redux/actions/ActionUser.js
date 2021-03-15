
import * as ActionTypes from '../ActionTypes';

let user = [
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

export const getUserData = () => (dispatch) => {
	try {
		dispatch({ type: ActionTypes.GET_ALL_USERS, payload: user });	
	} catch (e) {
		console.log(e);
	}
};

export const editUserData = (data) => async (dispatch) => {
    for (var i = 0; i < user.length; i++) {
        if (user[i].Id === data.id) {
          user[i].name = data.name;
          user[i].address = data.address;
          user[i].home = data.home;
          break;
        }
      }
	try {
		dispatch({ type: ActionTypes.SET_USER, payload: user });
        console.log("mark 2")
	} catch (e) {
        console.log("mark 3")
		console.log(e);
	}
};

