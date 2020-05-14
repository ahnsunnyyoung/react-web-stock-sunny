import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';

export default function ErrorMessage() {
    const error = useSelector(state => state.error)
    if(!error){
        return <div/>;
    }else if(error.message === 'Request failed with status code 429'){
        return <div/>;
    }

    return (
        <Alert variant='danger'>
            Error: {error.message}
        </Alert>
    );
}