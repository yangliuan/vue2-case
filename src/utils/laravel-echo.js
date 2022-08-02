import Echo from 'laravel-echo';

window.pusher = require('pusher-js');

const laraecho = new Echo({
    broadcaster: 'pusher',
    key: '20220725',
    authEndpoint: process.env.VUE_APP_API_BASE_URL + '/broadcasting/auth',
    wsHost: process.env.VUE_APP_WS_BASE_URL,
    //wsHost: '127.0.0.1',
    wsPort: 6001,
    forceTLS: false,
    enabledTransports: ['ws'],
})

export { laraecho }