import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = ($event) => {
        $event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            showErrorModal('Invalid data', 'Please, fill both values');
            return;
        }

        if (Number(age) < 1) {
            showErrorModal('Invalid age', 'Insert an age higher than 0');
            return;
        }

        props.onAddUser({ name: username, age, id: Math.random().toString() });
        setUsername('');
        setAge('');
    };

    const showErrorModal = (title, message) => {
        props.onError({ title, message });
    };

    const usernameChangeHandler = ($event) => {
        setUsername($event.target.value);
    };

    const ageChangeHandler = ($event) => {
        setAge($event.target.value);
    };

    return (
        <>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={usernameChangeHandler}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        value={age}
                        type="number"
                        onChange={ageChangeHandler}
                    />

                    <Button type="submmit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
