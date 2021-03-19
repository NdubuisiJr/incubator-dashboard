import {createSelector} from 'reselect';

export const getCurrentTemperature = state => state.temperatureContext.current;
export const getTemperatureHistory = state => state.temperatureContext.history;

export const getTemperaturePlotingHistory = createSelector(
    getTemperatureHistory,
    (history) => {

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
                }
            ]
        };
    }
);