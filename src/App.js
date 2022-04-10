import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import ErrorModal from './components/UI/ErrorModal';

function App() {
    const [users, setUsers] = useState([]);
    const [errorInfo, setErrorInfo] = useState(undefined);

    const addUserHandler = (user) => {
        // using a function inside setUsers, because when our state is a list
        // we relie on previous value of it. Using this method, automatic gives us
        // the previous vaule to work on
        setUsers((prevUsersList) => {
            return [...prevUsersList, user];
        });
    };

    const openErrorModal = (errorInfo) => {
        setErrorInfo(errorInfo);
        console.log(errorInfo);
    };

    const hideError = () => {
        setErrorInfo(undefined);
    };

    return (
        <>
            {errorInfo && (
                <ErrorModal
                    onConfirm={hideError}
                    title={errorInfo.title}
                    message={errorInfo.message}
                />
            )}
            <AddUser onAddUser={addUserHandler} onError={openErrorModal} />
            <UserList users={users} />
        </>
    );
}

export default App;
