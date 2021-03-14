import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getUserData } from '../_redux/actions/ActionUser';

const Users = ({name}) => {

    const {users} = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getUserData());
	}, []);

    return (
        <div>
            {users && users.length && users.map((user) =>  {
            return (
                <div className="user-wrapper">
                    
                    <h1>{user.name}</h1>
                </div>
            )} )}
        </div>
    )
}

export default Users 
