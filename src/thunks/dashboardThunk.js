/* eslint-disable no-undef */
/* eslint-disable no-console */
let client = null;
import{ 
    TEMPERATURE_TOPIC, TemperatureReceived,
    HUMIDITY_TOPIC, HumidityReceived,
    FAN_SPEED_TOPIC, FanSpeedReceived,
    INPUT_VOLTAGE_TOPIC, InputVoltageReceived,
    OUTPUT_VOLTAGE_TOPIC, outputVoltageReceived,
    TemperatureReference,
    HumidityReference
} from '../actions/dashboardAction';

export const connectToMachine = () => async dispatch => {
    try {
        connectToMqttBroker(dispatch);
    } catch (err) {
        console.log(err);
    }
};

export const applyChanges = (temp, hum) => dispatch => {
    try {
        const tempData = {
            name:'Temperature',
            value: temp,
            unit: '°C',
            time: new Date().toLocaleTimeString()
        };
        const message = new Paho.MQTT.Message(JSON.stringify(tempData));
        message.destinationName = TEMPERATURE_TOPIC;
        message.qos = 0;
        client.send(message);

        const humData = {
            name: 'Humidity',
            value: hum,
            unit: 'g/m3',
            time: new Date().toLocaleTimeString()
        };
        const message2 = new Paho.MQTT.Message(JSON.stringify(humData));
        message2.destinationName = HUMIDITY_TOPIC;
        message2.qos = 0;
        client.send(message2);

        dispatch(TemperatureReference(temp));
        dispatch(HumidityReference(hum));
    } catch (error) {
        console.log(err);
    }
};

// connection helper
const connectToMqttBroker = dispatch => {
    client = new Paho.MQTT.Client('broker.mqttdashboard.com', Number(8000), '/mqtt', '');

    client.onConnectionLost =  responseObject => {
        console.log('Connection Lost: ' + responseObject.errorMessage);
    };

    client.onMessageArrived =  message => {
        const data = JSON.parse(message.payloadString);
        switch (message.destinationName) {
            case TEMPERATURE_TOPIC:
                return dispatch(TemperatureReceived(data));
            case HUMIDITY_TOPIC:
                return dispatch(HumidityReceived(data));
            case FAN_SPEED_TOPIC:
                return dispatch(FanSpeedReceived(data));
            case INPUT_VOLTAGE_TOPIC:
                return dispatch(InputVoltageReceived(data));
            case OUTPUT_VOLTAGE_TOPIC:
                return dispatch(outputVoltageReceived(data));
            default:
                break;
        }
    };

    client.connect({
        onSuccess: onConnect
    });

    function onConnect(){
        console.log('connected!!!');
        client.subscribe(TEMPERATURE_TOPIC);
        client.subscribe(HUMIDITY_TOPIC);
        client.subscribe(FAN_SPEED_TOPIC);
        client.subscribe(INPUT_VOLTAGE_TOPIC);
        client.subscribe(OUTPUT_VOLTAGE_TOPIC);
    }
};