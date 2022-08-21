import Echo from 'laravel-echo';

window.pusher = require('pusher-js');

const laraecho = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_LARAECHO_KEY,
    // authEndpoint: process.env.VUE_APP_API_BASE_URL + '/broadcasting/auth',
    wsHost: process.env.VUE_APP_LARAECHO_WS_BASE_URL,
    wsPort: process.env.VUE_APP_LARAECHO_WS_PORT,
    forceTLS: false,
    enabledTransports: ['ws'],
})

export { laraecho }