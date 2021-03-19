/* eslint-disable no-console */
import{ 
    TEMPERATURE_TOPIC, TemperatureReceived,
    HUMIDITY_TOPIC, HumidityReceived,
    FAN_SPEED_TOPIC, FanSpeedReceived,
    INPUT_VOLTAGE_TOPIC, InputVoltageReceived,
    OUTPUT_VOLTAGE_TOPIC, outputVoltageReceived
} from '../actions/dashboardAction';

export const connectToMachine = () => async dispatch => {
    try {
        connectToMqttBroker(dispatch);
    } catch (err) {
        console.log(err);
    }
};


// connection helper
const connectToMqttBroker = dispatch => {
    // eslint-disable-next-line no-undef
    const client = new Paho.MQTT.Client('broker.mqttdashboard.com', Number(8000), '/mqtt', '');

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
                console.log(message.destinationName);
                return dispatch(InputVoltageReceived(data));
            case OUTPUT_VOLTAGE_TOPIC:
                console.log(message.destinationName);
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