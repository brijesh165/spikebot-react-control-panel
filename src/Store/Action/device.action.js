import deviceTypes from './device.types';

export const fetchDeviceStart = () => (
    console.log('0'),
    {
    type: deviceTypes.FETCH_DEVICE_START
});