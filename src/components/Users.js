import { css} from '@emotion/css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getUserData } from '../_redux/actions/ActionUser';
import User from './User'

const main = css`
    margin:0px auto;
    .wrapper {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top:100px;
    }
    .inner-container{
        border:1px solid grey;
        border-radius:10px;
    }  
`;

const Users = () => {

    const {users} = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

    return (
        <div className={main}>
            <div className="wrapper">
                <div className="inner-container">
                    {users && users.length && users.map((user) =>  {
                    return (
                        <User key={user.name} user={user}/>
                    )} )}   
                </div>
            </div>
        </div>
    )
}

export default Users 
