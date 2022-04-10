import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import Backdrop from './Backdrop';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
                <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.title || 'An error occured!'}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.message || 'Something went wrong'}</p>
                    </div>
                    <footer className={classes.actions}>
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
                </Card>,
                document.getElementById('modal-root')
            )}
        </>
    );
};

export default ErrorModal;
