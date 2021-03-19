/* eslint-disable no-unused-vars */
import {createSelector} from 'reselect';

export const getCurrentTemperature = state => state.temperatureContext.current;
export const getTemperatureHistory = state => state.temperatureContext.history;
export const getRefrenceTemperature = state => state.temperatureContext.reference;

export const getTemperaturePlotingHistory = createSelector(
    getTemperatureHistory,
    getRefrenceTemperature,
    (history, reference) => {

        return {
            labels: history.map(his=>his.time),
            datasets:[
                {
                    label:'Temperature',
                    data: history.map(his=>his.value),
                    backgroundColor:[
                        '#744FC6'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'Reference',
                    data: history.map(his=>reference),
                    borderColor: '#744FC6',
                    backgroundColor:[
                        '#fff0'
                    ],
                    borderWidth: 4
                }
            ]
        };
    }
);