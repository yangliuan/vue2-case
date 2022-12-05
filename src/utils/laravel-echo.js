import Echo from 'laravel-echo';
import { getToken } from '@/utils/auth'

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
    auth: { headers: { 'Authorization': 'Bearer ' +  getToken(), 'Accept': 'application/json' } }
})

export { laraecho }