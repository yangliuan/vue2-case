import Echo from 'laravel-echo';

window.pusher = require('pusher-js');

const laraecho = new Echo({
    broadcaster: 'pusher',
    key: '20220725',
    authEndpoint: 'http://api.exhibition.demo/broadcasting/auth',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
})

export { laraecho }