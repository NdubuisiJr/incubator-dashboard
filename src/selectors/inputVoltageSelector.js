import {createSelector} from 'reselect';

export const getCurrentInputVoltage = state => state.inputVoltageContext.current;
export const getInputVoltageHistory = state => state.inputVoltageContext.history;

export const getInputVoltagePlotingHistory = createSelector(
    () => {
        return {
            animate:true,
            nrOfLevels:15,
            percent:0.56,//to be calculated
            needleColor:'#F49D37',
        };
    }
);