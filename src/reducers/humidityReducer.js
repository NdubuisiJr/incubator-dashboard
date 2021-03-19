import { HUMIDITY_DATA_RECEIVED } from '../actions/dashboardAction'; 
import {  addReceivedData } from '../utils/reducerUtil';

const initialState = {
    reference: 45,
    current: {
        name: 'Humidity',
        value: 0,
        unit: 'g/m3'
    },
    history: []
};

export const humidityContext = (state =initialState , action) => {
    const { type, payload} = action; 
    switch (type) {
        case HUMIDITY_DATA_RECEIVED: {
            return addReceivedData(state, payload);
        }

        default:
            return state;
    }
};