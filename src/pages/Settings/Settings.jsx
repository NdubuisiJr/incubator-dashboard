import React from 'react';
import propTypes from 'prop-types';
import TrayDisplay from '../../components/trayDisplay';
import { connect } from 'react-redux';
import { getCurrentTemperature } from '../../selectors/temperatureSelector';
import { getCurrentFanspeed } from '../../selectors/fanSpeedSelector';
import { getCurrentHumidity } from '../../selectors/humiditySelector';
import { getCurrentInputVoltage } from '../../selectors/inputVoltageSelector';
import { getCurrentOutputVoltage } from '../../selectors/outputVoltageSelector';
import './settings.css';

const Settings = ({ currentTemperature, currentHumidity, currentFanSpeed, currentInputVoltage, currentOutputVoltage }) => {
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
                                    <input type='number' className="form-control" id="temperature" placeholder="Temperature"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="humidity" className="col-sm-3 col-form-label">Humidity</label>
                                <div className="col-sm-9">
                                    <input type="number" className="form-control" id="humidity" placeholder="Humidity"/>
                                </div>
                            </div>

                            
                            <div className="form-group row"> 
                            </div>

                            <div className="form-group row">
                            </div>

                            <div className="form-group row">
                            </div>
                            
                            <button type="submit" className="btn btn-success mr-2">Apply</button>
                            <button className="btn btn-light">Cancel</button>
                        </form>
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
};

const mapStateToProps = state =>({
    currentTemperature: getCurrentTemperature(state),
    currentHumidity : getCurrentHumidity(state),
    currentFanSpeed: getCurrentFanspeed(state),
    currentInputVoltage: getCurrentInputVoltage(state),
    currentOutputVoltage: getCurrentOutputVoltage(state),
});


export default connect(mapStateToProps)(Settings);