
const initialState = {
    current: {
        name: 'Input Voltage',
        value: 5,
        unit: 'V'
    },
    history: [
        { time:'1/12021',value:4 },
        { time:'2/12021',value:18 },
        { time:'3/12021',value:9 },
        { time:'4/12021',value:13 },
        { time:'5/12021',value:12 },
        { time:'6/12021',value:9 }
    ]
};

export const inputVoltageContext = (state =initialState , action) => {
    if(action)
        return state;
    return state;
};