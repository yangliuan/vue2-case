import Echo from 'laravel-echo';

window.pusher = require('pusher-js');
//REF https://learnku.com/laravel/t/17293
const laraecho = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_LARAECHO_KEY,
    authEndpoint: process.env.VUE_APP_API_BASE_URL + '/api/broadcasting/auth',
    wsHost: process.env.VUE_APP_LARAECHO_WS_BASE_URL,
    wsPort: process.env.VUE_APP_LARAECHO_WS_PORT,
    forceTLS: false,
    enabledTransports: ['ws'],
    auth: { headers: { 'Authorization': 'Bearer ' +  '1|3Px8ayhtoTEsw8tQ48vtViCzDsvpzs501FYrR1QD','Accept': 'application/json' } }
})

export { laraecho }