
const initialState = {
    current: {
        name: 'Fan Speed',
        value: 5,
        unit: 'm/s'
    },
    history: [
        { time:'1/12021',value:4 },
        { time:'2/12021',value:5 },
        { time:'3/12021',value:6 },
        { time:'4/12021',value:1 },
        { time:'5/12021',value:6 },
        { time:'6/12021',value:9 }
    ]
};

export const fanSpeedContext = (state =initialState , action) => {
    if(action)
        return state;
    return state;
};