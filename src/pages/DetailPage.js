import React from 'react';
import { useParams } from 'react-router-dom';
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";

const DetailPage = () => {
    const {  name } = useParams();
    return (
        <>
            <AppBar/>

            <div>
                About: {name}
            </div>
            <BottomNav/> 
        </>
    );
};

export default DetailPage;
