import React, { useContext, useEffect, useState } from 'react';
import {AuthContex} from '../../Provider/AuthProvider';

const MyCollages = () => {
    const {user,loading} = useContext(AuthContex)
    const [applications,setApplications] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:5000/applications?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setApplications(data);
        })
    },[user])


    return (
        <div>
            <h2 className='text-3xl font-mono text-center my-3'>My Collages</h2>
            <div>
                {/* {
                    applications.map((application,index))
                } */}
            </div>
        </div>
    );
};

export default MyCollages;