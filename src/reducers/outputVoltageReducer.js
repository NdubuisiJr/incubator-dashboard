
const initialState = {
    current: {
        name: 'Output Voltage',
        value: 10,
        unit: 'V'
    },
    history: [
        { time:'1/12021',value:11 },
        { time:'2/12021',value:18 },
        { time:'3/12021',value:9 },
        { time:'4/12021',value:13 },
        { time:'5/12021',value:12 },
        { time:'6/12021',value:19 }
    ]
};

export const outputoltageContext = (state =initialState , action) => {
    if(action)
        return state;
    return state;
};