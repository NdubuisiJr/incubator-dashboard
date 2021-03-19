import {createSelector} from 'reselect';

export const getCurrentFanspeed = state => state.fanSpeedContext.current;
export const getfandSpeedHistory = state => state.fanSpeedContext.history;

export const getFanPlotingHistory = createSelector(
    getfandSpeedHistory,
    (history) => {

        return {
            labels: history.map(his=>his.time),
            datasets:[
                {
                    label:'Fan Speed',
                    data: history.map(his=>his.value),
                    backgroundColor:[
                        '#379392'
                    ],
                    borderWidth: 4
                }
            ]
        };
    }
);