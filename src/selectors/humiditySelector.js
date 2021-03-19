import {createSelector} from 'reselect';

export const getCurrentHumidity = state => state.humidityContext.current;
export const getHumidityHistory = state => state.humidityContext.history;

export const getHumidityPlotingHistory = createSelector(
    getHumidityHistory,
    (history) => {

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
                }
            ]
        };
    }
);