import { TEMP_DATA_RECEIVED } from '../actions/dashboardAction';
import { addReceivedData } from '../utils/reducerUtil';


const initialState = {
    current: {
        name: 'Temperature',
        value: 0,
        unit: '°C'
    },
    history: []
};

export const temperatureContext = (state =initialState , action) => {
    const { type, payload} = action; 
    switch (type) {
        case TEMP_DATA_RECEIVED: {
            return addReceivedData(state, payload);
        }

        default:
            return state;
    }
};