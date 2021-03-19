/* eslint-disable no-unused-vars */
import {createSelector} from 'reselect';

export const getCurrentHumidity = state => state.humidityContext.current;
export const getHumidityHistory = state => state.humidityContext.history;
export const getReferenceHumidity = state => state.humidityContext.reference;

export const getHumidityPlotingHistory = createSelector(
    getHumidityHistory,
    getReferenceHumidity,
    (history, reference) => {

        return {
            labels: history.map(his=>his.time),
            datasets:[
                {
                    label:'Humidity',
                    data: history.map(his=>his.value),
                    backgroundColor:[
                        '#4FB0C6'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'Reference',
                    data: history.map(his=>reference),
                    borderColor: '#4FB0C6',
                    backgroundColor:[
                        '#fff0'
                    ],
                    borderWidth: 4,
                    pointRadius:0
                }
            ]
        };
    }
);