import React from 'react';

import { editUserData } from '../_redux/actions/ActionUser';
import {useDispatch} from 'react-redux';

import {useState} from 'react';
import {css} from '@emotion/css';
import {FaUser} from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

const usersList = css`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    border-radius:10px;
    margin:10px;
    padding:20px;
    width:500px;
    height:auto;
    cursor: pointer;
    &:hover{
        background-color:#E7E7E7;
    }

    .user-info{
        display:flex;
        flex-direction:row;
        justify-content:start;
        align-items:center;
        width:100%;
        .u-name{
            margin-left:10px;
            color:#7F8180;
        }
    }
    .edit{
        width:100px;
        color:white;
        border:none;
        border-radius:10px;
        background-color:#10732C;
        cursor: pointer;
        &:hover{
            background-color:#447B39;
        }
        &:focus{
            outline:none;
        }
    }
`;

const User = ({user}) => {
    const [openModal, setOpenModal] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const [userName, setUserName] = useState(user.name);
    const [userAdd, setUserAdd] = useState(user.address);
    const [userHome, setUserHome] = useState(user.home);

    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
	});

    const onSubmit = async (data) => {
        data.id=user.id;
        try{
            dispatch(editUserData(data));
        }
        catch(e){
            console.log(e, "dispatch error")
        }
        setOpenEdit(false)
	};

    return (
        <>
            <div className={usersList}>
                <div className="user-info" onClick={() => setOpenModal(true)}>
                    <FaUser style={{color:"#10732C"}}/>
                    <span className="u-name">{user.name}</span>
                </div>
                <div>
                    <Button className="btn edit" onClick={() => setOpenEdit(true)}>Edit</Button>
                </div>
            </div>
            {/* moadal view */}
            <Modal show={openModal} onHide={() => setOpenModal(false)}>   <Modal.Header>
                    <Modal.Title><h3>{user.name}</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong >Address: </strong>{user.address}</p>
                        <p><strong >Home: </strong>{user.home}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn edit" onClick={() => setOpenEdit(true)}>Edit</Button>
                        <Button variant="secondary" onClick={() => setOpenModal(false)}>Close</Button>
                    </Modal.Footer> 
            </Modal>

            {/* Modal Edit */}
            <Modal show={openEdit} onHide={() => setOpenEdit(false)}>
                <Modal.Header>
                    <Modal.Title><h3>{user.name}</h3></Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Form.Group>
                            <div className="text-secondary" style={{fontSize:"1rem"}} >Name</div>
                            <Form.Control ref={register} name="name" type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <span className="text-secondary" style={{fontSize:"1rem"}}>Address</span>
                            <Form.Control ref={register} name="address" type="text" value={userAdd} onChange={(e)=> setUserAdd(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <span className="text-secondary" style={{fontSize:"1rem"}}>Home</span>
                            <Form.Control ref={register} name="home" type="text" value={userHome} onChange={(e)=> setUserHome(e.target.value)}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" className="mr-2">
                            Save Changes
                        </Button>
                        <Button onClick={() => setOpenEdit(false)} className="bg-secondary text-white border-0">Close</Button>
                    </Modal.Footer>
                </Form>   
            </Modal>
        </>
    )
}

export default User
