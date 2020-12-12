import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminPanel.css';
// import fakeData from '../../fakeData/fakeData'


const Admin = () => {
    const handleAddEvent=()=>{
    
   
    }
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src="https://i.ibb.co/vJ36rM4/Group-1329.png" className="img-fluid mb-4" alt="" />
                    <div className="d-flex">
                        <img style={{ height: '25px' }} src="https://i.ibb.co/bgyzCV6/users-alt-1.png" className="img-fluid" alt="" />
                        <Link to="/allVolunteer"><p>Volunteer register list</p></Link>
                    </div>
                    <div className="d-flex">
                        <img style={{ height: '25px' }} src="https://i.ibb.co/3BSp44P/plus-1.png" alt="" />
                        <Link to="/newEvent"><button onClick={handleAddEvent}>Add event</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;