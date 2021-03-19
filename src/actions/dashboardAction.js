export  const TEMPERATURE_TOPIC = 'Sonic-Labs-Incubator-Temperature';
export const TEMP_DATA_RECEIVED = 'Temperature received';
export const TemperatureReceived = data =>({
    type: TEMP_DATA_RECEIVED,
    payload: { data }
});

export  const HUMIDITY_TOPIC = 'Sonic-Labs-Incubator-Humidity';
export const HUMIDITY_DATA_RECEIVED = 'Humidity received';
export const HumidityReceived = data =>({
    type: HUMIDITY_DATA_RECEIVED,
    payload: { data }
});

export  const FAN_SPEED_TOPIC = 'Sonic-Labs-Incubator-Fanspeed';
export const FANSPEED_DATA_RECEIVED = 'Fan speed Receive d';
export const FanSpeedReceived = data =>({
    type: FANSPEED_DATA_RECEIVED,
    payload: { data }
});