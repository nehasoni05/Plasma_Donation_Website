import React, {useEffect, useState} from 'react';
import styles from './requester.module.css';
import { Link } from 'react-router-dom';

const Donor = () =>{
    const [requesters,setRequesters]=useState([{
        name:"",
        gender:"",
        age:"",
        bloodgroup:"",
        positivedate:"",
        phone:"",
        state:"",
        city:""

    }]);

    useEffect(() => {
        fetch("/plasma/getrequesters").then(res=>{
            if(res.ok)
            {
                return res.json();
            }
        }).then(jsonRes => setRequesters(jsonRes))
    })
    return(
        <>
         <h1 className={styles.heading}>Request List</h1>
            <table className={styles.styledtable}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Date of COVID-19 positive<br/><center>(yyyy-mm-dd)</center></th>
                <th>Phone Number</th>
                <th>State</th>
                <th>City</th>
                <th>Update Info</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        { requesters.map(donor =>
        <tr>
            <td>{donor.name}</td>
            <td>{donor.age}</td>
            <td>{donor.gender}</td>
            <td>{donor.bloodgroup}</td>
            <td>{(donor.positivedate).slice(0,10)}</td>
            <td>{donor.phone}</td>
            <td>{donor.state}</td>
            <td>{donor.city}</td>
            <td><button className={styles.button}><Link to="/plasma/requesterlogin" className={styles.link}>Update</Link></button></td>
            <td><button className={styles.button}><Link to="/plasma/requesterloginanddelete" className={styles.link}>Delete</Link></button></td> 
        </tr>
        )}
        </tbody>
        </table>
        </>
    );
}

export default Donor;