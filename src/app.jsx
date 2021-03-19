import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import './app.css';
import Footer from './components/footer';

const App = () =>{

    const [height, setHeight] = useState(window.innerHeight);
    const [refresh, setRefresh] = useState(50);

    return(
        <div className='app'>
            <BrowserRouter>
                <NavBar/>
                <SideBar height={height} setRefresh={setRefresh}/>
                <Switch>
                    <Route path='/' component={Dashboard} exact/>
                    <Route path='/settings' component={Settings} exact/>
                </Switch>
                <Footer setHeight={setHeight} refresh={refresh}/>
            </BrowserRouter>
        </div>
    );
};

export default App;