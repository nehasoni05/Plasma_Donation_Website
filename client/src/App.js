import React from 'react';
import Home from "./components/Home/home";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './App.module.css';


import Vaccine from "./components/Vaccine/vaccine";
import NavBar from './components/Navbar/NavBar.jsx';
import PlasmaInfo from './components/PlasmaInfo/plasmaInfo';
import Hospitals from './components/Hospitals/hospitals';
import DonorForm from './components/Form/DonorForm/form';
import RequestForm from './components/Form/RequestForm/form';
import DonorList from './components/List/Donor/donor';
import RequestList from './components/List/Requester/requester';
import Login from './components/List/Donor/login';
import UpdateDonor from './components/List/Donor/update';
import LoginR from './components/List/Requester/login';
import UpdateR from './components/List/Requester/update';

const App = () =>{
    return(
     <Router>
         <NavBar />
       <div className={styles.container}>
        <Route exact path="/" component={Home} />
        </div>
        <Route exact path="/plasma/donateplasma" component={DonorForm} />
        <Route exact path="/vaccineinfo" component={Vaccine} />
        <Route exact path="/plasma" component={PlasmaInfo} />
        <Route exact path="/plasma/requestplasma" component={RequestForm} />
        <Route exact path="/plasma/getdonors" component={DonorList}/>
        <Route exact path="/plasma/getrequesters" component={RequestList}/>
        <Route exact path="/hospitalslist" component={Hospitals}/>

        <Route exact path="/plasma/login" component={Login}/>
        <Route exact path="/plasma/loginanddelete" component={Login}/>
        <Route exact path="/plasma/updatedonor" component={UpdateDonor}/>

        <Route exact path="/plasma/requesterlogin" component={LoginR}/>
        <Route exact path="/plasma/requesterloginanddelete" component={LoginR}/>
        <Route exact path="/plasma/updaterequester" component={UpdateR}/>

    </Router>
    )
}

export default App;