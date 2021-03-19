import {createSelector} from 'reselect';

export const getCurrentOutputVoltage = state => state.outputoltageContext.current;
export const getOutputVoltageHistory = state => state.outputoltageContext.history;

export const getOutputVoltagePlotingHistory = createSelector(
    getOutputVoltageHistory,
    () => {
        return {
            animate:true,
            nrOfLevels:15,
            percent:0.56,//to be calculated
            needleColor:'#E9D2F4',
        };
    }
);