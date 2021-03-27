import React, { useState } from 'react';
import propTypes from 'prop-types';
import TrayDisplay from '../../components/trayDisplay';
import { connect } from 'react-redux';
import { getCurrentTemperature, getRefrenceTemperature } from '../../selectors/temperatureSelector';
import { getCurrentHumidity, getReferenceHumidity } from '../../selectors/humiditySelector';
import { getCurrentFanspeed } from '../../selectors/fanSpeedSelector';
import { getCurrentInputVoltage } from '../../selectors/inputVoltageSelector';
import { getCurrentOutputVoltage } from '../../selectors/outputVoltageSelector';
import { applyChanges } from '../../thunks/dashboardThunk';
import './settings.css';

const Settings = ({ 
    currentTemperature, currentHumidity, currentFanSpeed, 
    currentInputVoltage, currentOutputVoltage, setupChanges,
    humReference, tempReference
}) => {
    const [temp, setTemp] = useState(tempReference);
    const [hum, setHum] = useState(humReference);
    
    const applyChange = ()=>{
        setupChanges(temp, hum);
    };

    const humChanged = e => {
        setHum(e.target.value);
    };

    const tempChanged = e => {
        setTemp(e.target.value);
    };

    return (
        <div className='dash-container'>
            <TrayDisplay currentFanSpeed={currentFanSpeed} currentHumidity={currentHumidity}
                currentInputVoltage={currentInputVoltage} currentOutputVoltage={currentOutputVoltage}
                currentTemperature={currentTemperature} />
                
            <div className="col-md-12 grid-margin margin-set">
                <div className="card" >
                    <div className="card-body">
                        <h4 className="card-title">Settings</h4>
                        <p className="card-description"> Preferred operating conditions conditions</p>
                        <form className="forms-sample">

                            
                            <div className="form-group row"> 
                            </div>

                            <div className="form-group row">
                            </div>

                            <div className="form-group row">
                            </div>

                            <div className="form-group row">
                                <label htmlFor="temperature" className="col-sm-3 col-form-label">Temperature</label>
                                <div className="col-sm-9">
                                    <input type='number' onChange={tempChanged} value={temp} className="form-control" id="temperature" placeholder="Temperature"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="humidity" className="col-sm-3 col-form-label">Humidity</label>
                                <div className="col-sm-9">
                                    <input type="number" onChange={humChanged} value={hum} className="form-control" id="humidity" placeholder="Humidity"/>
                                </div>
                            </div>

                            
                            <div className="form-group row"> 
                            </div>

                            <div className="form-group row">
                            </div>

                            <div className="form-group row">
                            </div>
                        </form>
                        <button onClick={applyChange} className="btn btn-success mr-2">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Settings.propTypes = {
    currentTemperature: propTypes.object,
    currentHumidity: propTypes.object,
    currentFanSpeed: propTypes.object,
    currentInputVoltage: propTypes.object,
    currentOutputVoltage: propTypes.object,
    setupChanges: propTypes.func,
    tempReference: propTypes.number,
    humReference: propTypes.number
};

const mapStateToProps = state =>({
    currentTemperature: getCurrentTemperature(state),
    currentHumidity : getCurrentHumidity(state),
    currentFanSpeed: getCurrentFanspeed(state),
    currentInputVoltage: getCurrentInputVoltage(state),
    currentOutputVoltage: getCurrentOutputVoltage(state),
    tempReference: getRefrenceTemperature(state),
    humReference: getReferenceHumidity(state)
});

const mapDispatchToProps = dispatch => ({
    setupChanges: (temp, hum)=> dispatch(applyChanges(temp, hum))
});


export default connect(mapStateToProps, mapDispatchToProps)(Settings);