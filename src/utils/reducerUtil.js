export const addReceivedData = (state, payload) =>{
    const { data } = payload;           
    const count = state.history.push({time: data.time.substr(0,8), value: data.value});
    if(count >=50 )
        state.history = state.history.filter((x,i) => i !== 0);
    return {
        ...state,
        current: data,
        history: [
            ...state.history
        ]
    };
};

export const interpolate = (min, max, mid) => {
    return (1 - ((max-mid)/(max-min))).toFixed(2);
};