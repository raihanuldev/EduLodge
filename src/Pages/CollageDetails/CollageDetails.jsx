import React from 'react';
import { useParams } from "react-router-dom";

const CollageDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Hello Iam Nia astechi More Details aboyur {id}</h2>
        </div>
    );
};

export default CollageDetails;